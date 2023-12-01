import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img } from "components"; //Input, Text
import C1LoginPageLightIdinput from "components/C1LoginPageLightIdinput";

const LoginPageLightPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col sm:gap-10 md:gap-10 gap-[156px] items-center justify-start mx-auto pb-[205px] w-full">
        <div className="bg-red-A400 h-[90px] w-full"></div>
        <div className="md:h-[458px] h-[573px] md:px-5 relative w-[55%] md:w-full">
          <Img
            className="absolute h-[200px] inset-x-[0] mx-auto object-cover top-[-150px] w-[30%]"
            src="images/img_hello.png"
            alt="hello"
          />          
          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto outline outline-[1px] outline-white-A700_4c p-[61px] md:px-10 sm:px-5 rounded-[40px] shadow-bs w-full">
            <C1LoginPageLightIdinput className="flex flex-col font-ibmplexsans h-[124px] md:h-auto items-start justify-start max-w-[700px] mt-[100px] w-full" />
            <div className="flex flex-col font-inter items-start justify-start mt-0.5 w-auto">
              <Button
                className="common-pointer cursor-pointer font-semibold h-[50px] text-center text-lg tracking-[-0.09px] w-[175px]"
                onClick={() => navigate("/frontpagelight")}
                shape="round"
                color="blue_gray_100"
                size="lg"
                variant="fill"
              >
                로그인
              </Button>
            </div>
            <Button className="bg-transparent cursor-pointer font-mako mb-[62px] min-w-[113px] mt-[17px] text-[15px] text-black-900 text-center tracking-[0.16px]">
              회원이 아니라면?
            </Button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default LoginPageLightPage;
