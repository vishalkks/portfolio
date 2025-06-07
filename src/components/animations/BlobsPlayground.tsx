import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Blob from "./Blob";

function useParallax(
  value: MotionValue<number>,
  distance: number
): MotionValue<number> {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface BlobsPlaygroundProps {
  children: React.ReactNode;
}

const BlobsPlayground: React.FC<BlobsPlaygroundProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);

  return (
    <div className="relative w-full h-full" ref={ref}>
      <div className="inset-0 fixed h-full p-10 -z-10 blur-3xl opacity-40">
        {[1, 2, 3, 4].map((item) => (
          <motion.div key={item} style={{ y }}>
            <Blob uid={item} />
          </motion.div>
        ))}
      </div>
      <div className="w-full max-w-5xl mx-auto px-6 z-20">{children}</div>
    </div>
  );
};

export default BlobsPlayground;
