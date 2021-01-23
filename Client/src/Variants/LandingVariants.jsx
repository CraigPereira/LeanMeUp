export const paraVariants = {
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

export const spinTransition = {
  loop: Infinity,
  duration: 20,
  ease: "linear",
};
