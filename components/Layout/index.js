// components/Layout/index.js

import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 0, opacity: 1}}
    transition={{
      when: "beforeChildren",
      type: "spring",
      duration: 0.3,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;