import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import LoginPagePwinput from "components/LoginPagePwinput";

const LoginpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col sm:gap-10 md:gap-10 gap-[105px] items-center justify-start mx-auto py-[22px] w-full">
        <div className="bg-red-A400 flex flex-col items-start justify-start p-2.5 w-full">
          <Img
            className="common-pointer h-[70px] md:ml-[0] ml-[70px] w-[70px]"
            src="images/img_pharrowuupleftlight.svg"
            alt="pharrowuupleftl"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="h-[602px] mb-[183px] md:px-5 relative w-[57%] md:w-full">
          <Img
            className="flex flex-row h-[135px] justify-center mb-[-41px] mx-auto object-cover w-[29%] z-[1]"
            src="images/img_hello.png"
            alt="hello"
          />
          <div className="bg-white-A700 flex flex-col items-center justify-end mt-auto mx-auto outline outline-[1px] outline-white-A700_4c p-[65px] md:px-10 sm:px-5 rounded-[40px] shadow-bs w-full">
            <div className="flex flex-col items-center justify-start mt-[50px] w-[55%] md:w-full">
              <LoginPagePwinput
                className="flex flex-col font-ibmplexsans h-[90px] md:h-auto items-start justify-start w-[376px] sm:w-full"
                labeltextOne="아이디 / 이메일주소"
              />
              <LoginPagePwinput
                className="flex flex-col font-ibmplexsans items-start justify-start mt-[34px] w-[376px] sm:w-full"
                helpertext="최소 10자리 이상 입력"
              />
              <Button
                className="common-pointer cursor-pointer font-inter font-semibold h-[50px] mt-[27px] text-center text-lg tracking-[-0.09px] w-[175px]"
                onClick={() => navigate("/testpage")}
                shape="round"
                color="blue_gray_100"
                variant="fill"
              >
                로그인
              </Button>
              <div className="flex flex-row font-mako gap-[18px] items-center justify-center mt-3 w-[56%] md:w-full">
                <Button
                  className="common-pointer bg-transparent cursor-pointer min-w-[96px] text-black-900 text-center text-xs tracking-[0.16px]"
                  onClick={() => navigate("/signuppage")}
                  size="xs"
                >
                  회원이 아니라면?
                </Button>
                <Button
                  className="bg-transparent cursor-pointer min-w-[96px] text-black-900 text-center text-xs tracking-[0.16px]"
                  size="xs"
                >
                  비밀번호 찾기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginpagePage;
