// components/Layout/index.js

import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    initial={{ y: 70, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    // exit={{ y: 100, opacity: 0}}
    transition={{
      when: "beforeChildren",
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;