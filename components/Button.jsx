import React from "react";

function Button({ type, className, children }) {
  return (
    <button
      className={`${
        type === "bg" ? "bg-[#CD921E]" : ""
      }
      border border-[#CD921E]
       ${className}`}
    >{children}</button>
  );
}

export default Button;
