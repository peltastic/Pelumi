export const generateLanguageColor = (language, type) => {
  if (language === "Nextjs") {
    if (type === "bg") {
      return "#3200F9";
    }
    return "#1E1054";
  }
  if (type === "bg") {
    return "#82BC05";
  }
  return "#455F0E";
};
