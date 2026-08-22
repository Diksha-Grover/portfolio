import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[var(--text-primary)] cursor-pointer ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500 mt-2 mr-3 rounded-full"
      ></motion.div>
    </button>
  );
};

export default TabButton;