import { motion } from "framer-motion";

const InView = ({ children }) => (
  <motion.div
    whileInView={{ y: 0, opacity: 1 }}
    initial={{ y: 80, opacity: 0 }}
    exit={{ y: 0, opacity: 1}}
    transition={{
      staggerChildren: "0.5",
      type: "spring",
      duration: 0.3,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);
export default InView;