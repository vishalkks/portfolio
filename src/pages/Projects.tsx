import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import React from "react";
import BlobsPlayground from "../components/animations/BlobsPlayground";
import ProjectBox from "../components/common/ProjectBox";
import PROJECTS from "../info/projects.json";

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
  desc: string;
  tags: string[];
  date: string;
}

const MarginComponent = styled("div")({
  marginTop: "-13%",
  "@media (max-width: 480px)": {
    marginTop: "0",
  },
});

const Projects: React.FC = () => {
  const projects: Project[] = PROJECTS;

  return (
    <BlobsPlayground>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="mt-24 mb-10"
      >
        <h2 className="text-6xl pb-4">My Projects</h2>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
        className="w-full flex flex-row gap-3 flex-col pb-40"
      >
        <div className="flex flex-row gap-6">
          <div className="grid sm:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((item) => (
              <ProjectBox key={item.id} project={item} />
            ))}
          </div>
        </div>
        <MarginComponent>
          <div className="grid sm:grid-cols-2 gap-8">
            {projects.slice(2, projects.length).map((item) => (
              <ProjectBox key={item.id} project={item} />
            ))}
          </div>
        </MarginComponent>
      </motion.div>
    </BlobsPlayground>
  );
};

export default Projects;
