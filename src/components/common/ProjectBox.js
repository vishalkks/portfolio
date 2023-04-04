import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function ProjectBox({ project }) {
  const textVariants = {
    beforeHover: { x: -10 },
    onHover: { x: 0 },
  };

  return (
    <motion.div
      initial="beforeHover"
      whileHover="onHover"
      className="flex-1 overflow-hidden mt-4 w-full cursor-pointer"
    >
        <ProjectCard project={project}/>
      <motion.div
        variants={textVariants}
        className="flex items-start gap-2 leading-6 pt-2"
      >
        <svg width="10" height="30" viewBox="0 -9 3 24">
          <path
            d="M0 0L3 3L0 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </svg>
        <h4 className="text-lg text-slate-800 font-medium">{project.title}</h4>
      </motion.div>
    </motion.div>
  );
}

export default ProjectBox;
