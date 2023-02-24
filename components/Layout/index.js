// components/Layout/index.js

import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 100, opacity: 0}}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      staggerChildren: 0.2,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;