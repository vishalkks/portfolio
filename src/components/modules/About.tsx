import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import USER from "../../info/about.json";
import CallAction from "../common/CallAction";

interface UserInfo {
  avatar: string;
  bio: string;
  linkedin: string;
}

const About: React.FC = () => {
  const userInfo: UserInfo = USER;

  return (
    <div className="py-8">
      <div className="flex gap-10 flex-col md:flex-row md:items-start items-center">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: 1, once: true }}
          transition={{ type: "spring", duration: 0.6 }}
          src={userInfo.avatar}
          className="w-48 min-w-48 h-48 rounded-full mt-10"
          alt="Profile"
        />
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <h3 className="text-3xl py-3 leading-snug text-center md:text-left">
            A little about me
          </h3>
          <Typography
            className="text-xl text-slate-700 leading-snug text-center md:text-left"
            style={{ whiteSpace: "pre-line" }}
          >
            {userInfo.bio}
          </Typography>
          <div className="w-full py-10 flex gap-5 items-center justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 1, once: true }}
              transition={{ type: "spring", duration: 0.6, delay: 0.6 }}
            >
              <CallAction label="LinkedIn" link={userInfo.linkedin} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 1, once: true }}
              transition={{ type: "spring", duration: 0.6, delay: 0.7 }}
            >
              <CallAction label="Resume" link="./docs/VishalKS2025.pdf" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
