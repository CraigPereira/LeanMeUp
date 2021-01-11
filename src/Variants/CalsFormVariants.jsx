export const entryVariants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 130,
    },
  },
};
