import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import LoginPagePwinput from "components/LoginPagePwinput";

const SignuppagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col items-center justify-start mx-auto py-[22px] w-full">
        <div className="bg-red-A400 flex flex-col items-start justify-start p-2.5 w-full">
          <Img
            className="common-pointer h-[70px] md:ml-[0] ml-[70px] w-[70px]"
            src="images/img_pharrowuupleftlight.svg"
            alt="pharrowuupleftl"
            onClick={() => navigate(-1)}
          />
        </div>
        <Img
          className="block h-[135px] md:h-auto mt-[105px] object-cover relative w-[16%]"
          src="images/img_hello.png"
          alt="hello"
        />
        <div className="flex flex-col items-center justify-start mb-[149px] mt-[33px] md:px-5 w-[27%] md:w-full">
          <LoginPagePwinput
            className="flex flex-col font-ibmplexsans h-[90px] md:h-auto items-start justify-start w-[376px] sm:w-full"
            labeltextOne="사용자 이름"
          />
          <LoginPagePwinput
            className="flex flex-col font-ibmplexsans h-[90px] md:h-auto items-start justify-start mt-1 w-[376px] sm:w-full"
            labeltextOne="아이디"
          />
          <LoginPagePwinput
            className="flex flex-col font-ibmplexsans items-start justify-start mt-0.5 w-[376px] sm:w-full"
            helpertext="최소 10자리 이상 입력"
          />
          <LoginPagePwinput
            className="flex flex-col font-ibmplexsans items-start justify-start mt-5 w-[376px] sm:w-full"
            labeltextOne="비밀번호 확인"
            helpertext="최소 10자리 이상 입력"
          />
          <Button
            className="common-pointer cursor-pointer font-inter font-semibold h-[50px] mt-6 text-center text-lg tracking-[-0.09px] w-[175px]"
            onClick={() => navigate("/signsuccesspage")}
            shape="round"
            color="blue_gray_100"
            variant="fill"
          >
            회원가입
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignuppagePage;
