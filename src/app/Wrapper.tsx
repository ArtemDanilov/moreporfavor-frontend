"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Wrapper = ({ children }: { children: React.ReactElement }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.125 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Wrapper;
