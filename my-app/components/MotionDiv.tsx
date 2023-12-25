"use client";
import { motion } from "framer-motion";

interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
}

const MotionDiv = ({ children, className }: MotionDivProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1, x: -100 }}
      animate={{
        x: 0,
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
