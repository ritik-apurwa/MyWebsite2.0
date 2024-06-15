import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface VisibleAnimationProps {
  children: React.ReactNode;
  id: string; // Changed from key to id
}

const VisibleAnimation: React.FC<VisibleAnimationProps> = ({
  children,
  id, // Changed from key to id
}) => {
  return (
    <AnimatePresence>
      <motion.div
        key={id} // Changed from key to id
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default VisibleAnimation;

// Example usage with unique keys
