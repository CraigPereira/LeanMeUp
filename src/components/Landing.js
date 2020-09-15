import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const paraVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 130,
    },
  },
};

const Landing = () => {
  return (
    <div className="landing-wrap">
      <h1>Lean me up</h1>
      <motion.p variants={paraVariants} initial="hidden" animate="visible">
        Lean me up simplifies complex nutritional math for you
      </motion.p>
      <Link to="/dashboard" className="button-styles">
        Get Started
      </Link>
    </div>
  );
};

export default Landing;
