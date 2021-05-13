export const paraVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 130,
    },
  },
};
export const circle1Variants = {
  visible: {
    y: 30,
    transition: {
      duration: 1.5,
      yoyo: Infinity,
    },
  },
};

export const circle2Variants = {
  visible: {
    y: -30,
    transition: {
      duration: 1.5,
      yoyo: Infinity,
    },
  },
};
