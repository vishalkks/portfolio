import { motion, Variants } from "framer-motion";
import React from "react";

interface CallActionProps {
  label: string;
  link: string;
}

const CallAction: React.FC<CallActionProps> = ({ label, link }) => {
  const buttonVariant: Variants = {
    beforeHover: {},
    onHover: { scaleX: 0.75, scaleY: 0.4 },
  };

  return (
    <motion.a
      href={link}
      className="action-btn"
      whileHover="onHover"
      whileTap={{ scale: 0.94 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <motion.div variants={buttonVariant} className="action-btn-shadow" />
    </motion.a>
  );
};

export default CallAction;
