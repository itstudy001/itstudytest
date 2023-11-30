import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import C1LoginPageLightIdinput from "components/C1LoginPageLightIdinput";

const LoginPageDarkPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-800_01 border border-black-900 border-solid flex flex-col font-inter sm:gap-10 md:gap-10 gap-[156px] items-center justify-start mx-auto pb-[329px] w-full">
        <div className="bg-red-A400 h-[90px] w-full"></div>
        <div className="flex flex-col items-center justify-start md:px-5 w-[49%] md:w-full">
          <Img
            className="h-[205px] sm:h-auto object-cover w-1/2 md:w-full"
            src="images/img_hello.png"
            alt="hello"
          />
          <div className="md:h-[125px] h-[162px] mt-11 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-auto">
              <Button
                className="common-pointer cursor-pointer font-semibold h-[50px] text-center text-lg tracking-[-0.09px] w-[175px]"
                onClick={() => navigate("/frontpagedark")}
                shape="round"
                color="blue_gray_100"
                size="lg"
                variant="fill"
              >
                로그인
              </Button>
            </div>
            <C1LoginPageLightIdinput className="absolute flex flex-col h-[124px] md:h-auto inset-x-[0] items-center justify-start max-w-[696px] mx-auto top-[0] w-full" />
          </div>
          <Button
            className="bg-transparent cursor-pointer font-semibold min-w-[113px] mt-4 text-[15px] text-center text-white-A700 tracking-[0.16px]"
            size="xs"
          >
            회원이 아니라면?
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginPageDarkPage;
