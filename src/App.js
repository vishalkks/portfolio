import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Blog from "./pages/Blog";
import WebFont from 'webfontloader';
import { useEffect } from "react";

function App() {
  //load fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
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
}

export default App;
