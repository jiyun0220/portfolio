export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const itemVariants = {
  hidden: (isEven: boolean) => ({
    opacity: 0,
    x: isEven ? -50 : 50
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const contentVariants = {
  hover: {
    y: -4,
    transition: {
      duration: 0.2
    }
  }
};
