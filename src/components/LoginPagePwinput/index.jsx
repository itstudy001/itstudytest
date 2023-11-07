import React from "react";

import { Input, Text } from "components";

const LoginPagePwinput = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start pb-2 w-full">
          <Text
            className="text-[15px] text-blue_gray-700 tracking-[0.32px] w-auto"
            size="txtIBMPlexSans15"
          >
            {props?.labeltextOne}
          </Text>
        </div>
        <Input
          name="field_One"
          placeholder="비밀번호를 입력해주세요."
          className="!placeholder:text-gray-500 !text-gray-500 font-ibmplexsans md:h-auto p-0 sm:h-auto text-left text-sm tracking-[0.16px] w-full"
          wrapClassName="border-2 border-red-A400 border-solid w-full"
          shape="square"
          color="white_A700"
          size="xs"
          variant="fill"
        ></Input>
        <div className="flex flex-col items-start justify-start pt-1 w-full">
          {!!props?.helpertext ? (
            <Text
              className="text-blue_gray-700 text-xs tracking-[0.32px] w-auto"
              size="txtIBMPlexSans12"
            >
              {props?.helpertext}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

LoginPagePwinput.defaultProps = { labeltextOne: "비밀번호" };

export default LoginPagePwinput;
