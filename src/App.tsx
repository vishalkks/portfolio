import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  //load fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects">
          <Route index element={<Projects />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
