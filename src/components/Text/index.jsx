import React from "react";

const sizeClasses = {
  txtInterBold25: "font-bold font-inter",
  txtInterSemiBold36WhiteA700: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterBold28: "font-bold font-inter",
  txtInterSemiBold28: "font-inter font-semibold",
  txtInterBold25WhiteA700: "font-bold font-inter",
  txtInterSemiBold32: "font-inter font-semibold",
  txtPaytoneOneRegular120: "font-normal font-paytoneone",
  txtInterSemiBold30: "font-inter font-semibold",
  txtYantramanavRegular30: "font-normal font-yantramanav",
  txtABeeZeeRegular25: "font-abeezee font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtYellowtailRegular100: "font-normal font-yellowtail",
  txtABeeZeeRegular24: "font-abeezee font-normal",
  txtYantramanavRegular36: "font-normal font-yantramanav",
  txtInterSemiBold30Black900: "font-inter font-semibold",
  txtYesevaOneRegular50: "font-normal font-yesevaone",
  txtInterSemiBold24Bluegray900: "font-inter font-semibold",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterBold36: "font-bold font-inter",
  txtInterSemiBold35: "font-inter font-semibold",
  txtIBMPlexSans15: "font-ibmplexsans font-normal",
  txtInterBold50: "font-bold font-inter",
  txtPaytoneOneRegular90: "font-normal font-paytoneone",
  txtInterBold30: "font-bold font-inter",
  txtInterSemiBold35WhiteA700: "font-inter font-semibold",
  txtInterSemiBold22: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtABeeZeeRegular24RedA400: "font-abeezee font-normal",
  txtInterSemiBold30WhiteA700: "font-inter font-semibold",
  txtABeeZeeRegular24WhiteA700: "font-abeezee font-normal",
  txtYellowtailRegular50: "font-normal font-yellowtail",
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
