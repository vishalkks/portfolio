import { motion } from "framer-motion";
import USER from "../../info/about.json";
import Experience from "../common/Experience";

function Intro() {
  return (
    <div className="my-20">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="text-6xl"
      >
        {USER.name}
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
        className="text-5xl pt-3 leading-snug font-light"
      >
        {USER.title}
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
        {/* <h3 className="text-3xl pt-3 leading-snug">Latest Projects</h3>
        <div className="flex items-center justify-between gap-5 flex-col md:flex-row md:items-start">
          {PROJECTS.slice(0, 3).map((item) => (
            // <ProjectBox project={item} key={item.id} />
            <RecipeReviewCard/>
          ))}
        </div> */}
      </motion.div>
    </div>
  );
}

export default Intro;
