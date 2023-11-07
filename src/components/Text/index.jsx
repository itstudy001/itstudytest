import React from "react";

const sizeClasses = {
  txtIBMPlexSans12: "font-ibmplexsans font-normal",
  txtInterSemiBold30: "font-inter font-semibold",
  txtIBMPlexSans15: "font-ibmplexsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
