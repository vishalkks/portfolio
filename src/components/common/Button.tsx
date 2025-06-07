import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  const buttonVariant = {
    beforeHover: {},
    onHover: { scaleX: 0.75, scaleY: 0.4 },
  };

  return (
    <motion.button
      type="submit"
      className="action-btn min-w-full"
      whileHover="onHover"
      whileTap={{ scale: 0.94 }}
    >
      {label}
      <motion.div
        variants={buttonVariant}
        className="action-btn-shadow min-w-full"
      />
    </motion.button>
  );
};

export default Button;
