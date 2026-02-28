"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex-grow"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

