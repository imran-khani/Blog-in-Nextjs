"use client";
import { motion, AnimationProps, MotionProps } from "framer-motion";

interface MotionDivProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationProps;
}

const MotionDiv = ({
  children,
  className,
  animation,
  ...props
}: MotionDivProps) => {
  return (
    <motion.div
      className={className}
      animate={animation?.animate}
      initial={animation?.initial}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
