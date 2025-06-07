import { motion } from "framer-motion";
import React from "react";
import BlobsPlayground from "../components/animations/BlobsPlayground";

const Blog: React.FC = () => {
  return (
    <BlobsPlayground>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="mt-24 mb-10"
      >
        <h2 className="text-6xl pb-4">My Blog</h2>
        <p className="text-2xl font-light">Coming soon...</p>
        <div style={{ height: "45vh", overflow: "hidden" }}></div>
      </motion.div>
    </BlobsPlayground>
  );
};

export default Blog;
