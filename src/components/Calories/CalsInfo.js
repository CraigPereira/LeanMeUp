import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { paraVariants, imgVariants } from "../../Variants/CalsInfoVariants";

const CalsInfo = (props) => {
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
        src={require("../../images/food-pyramid.png")}
        alt="Food pyramid illustration"
      />

      <Link to={`${props.match.url}/input`} className="button-styles">
        Let's Go
      </Link>
    </div>
  );
};

export default CalsInfo;
