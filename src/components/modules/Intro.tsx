import { motion } from "framer-motion";
import React from "react";
import USER from "../../info/about.json";
import Experience from "../common/Experience";

interface UserInfo {
  name: string;
  title: string;
}

const Intro: React.FC = () => {
  const userInfo: UserInfo = USER;

  return (
    <div className="my-20">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="text-6xl"
      >
        {userInfo.name}
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
        className="text-5xl pt-3 leading-snug font-light"
      >
        {userInfo.title}
      </motion.div>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.8,
          duration: 1,
        }}
        className="mt-20"
      >
        <h3 className="text-3xl pt-3 leading-snug">Experience</h3>
        <Experience />
      </motion.div>
    </div>
  );
};

export default Intro;
