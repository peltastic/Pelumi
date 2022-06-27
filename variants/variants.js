export const headerVariants = (side) => {
  return {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: side },
  };
};

export const lineVariants = (side) => {
  return {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: side },
  };
};
export const scaleUpVariant = (delay) => {
  return {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, delay: delay },
    },
    hidden: { opacity: 0, y: 50, scale: 0 },
  };
};

export const slideInVariant = (delay, value) => {
  return {
    visible: {
      opacity: 1,
      x: 0,
      //   scale: 1,
      transition: {
        duration: 0.7,
        delay: delay,
        x: { type: "spring", stiffness: 100 },
      },
    },
    hidden: { opacity: 0, x: value },
  };
};

export const slideOutVariant = (value) => {
  return {
    open: {
      x: value,
    },
    close: {
      x: 0,
    },
  };
};

export const fadeUp = (delay) => {
  return {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: delay,
      
      },
    },
    hidden: { opacity: 0, y: 10 },
  };
};

export const navRotate = (angle) => {
  return {
    open: {
      rotate: angle,
      top: 10,
      width: 35,
      backgroundColor: "#fff"
    },
    close: {
      rotate: 0,
    },
  };
};
