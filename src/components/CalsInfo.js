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

const imgVariants = {
  visible: {
    scale: 1.2,
    transition: {
      duration: 1.5,
      yoyo: Infinity,
    },
  },
};

const CalsInfo = () => {
  return (
    <div className="cals-info-wrap">
      <h1>Calories & Macros</h1>
      <motion.p variants={paraVariants} animate="visible" initial="hidden">
        Calculating your macros and calories can be a long, complex & time
        consuming process. We automate the process & get you those numbers
        instantly in a few clicks!
      </motion.p>
      <motion.img
        variants={imgVariants}
        animate="visible"
        src={require("../images/food-pyramid.png")}
        alt="Food pyramid illustration"
      />

      <Link to="/calsinput" className="button-styles">
        Let's Go
      </Link>
    </div>
  );
};

export default CalsInfo;
