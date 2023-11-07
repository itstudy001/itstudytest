import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const SignsuccesspagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter sm:gap-10 md:gap-10 gap-[73px] items-center justify-start mx-auto py-[22px] w-full">
        <div className="bg-red-A400 h-[90px] w-full"></div>
        <div className="bg-white-A700 flex flex-col gap-[55px] items-center justify-start max-w-[1092px] mb-[63px] mx-auto outline outline-[1px] outline-white-A700_4c p-[108px] md:px-5 rounded-[40px] shadow-bs w-full">
          <Img
            className="h-[135px] md:h-auto object-cover w-[27%]"
            src="images/img_hello.png"
            alt="hello"
          />
          <div className="h-[257px] md:h-[323px] mb-[91px] relative w-1/2 sm:w-full">
            <Button
              className="common-pointer absolute bottom-[0] cursor-pointer font-semibold h-[50px] inset-x-[0] mx-auto text-center text-lg tracking-[-0.09px] w-[175px]"
              onClick={() => navigate("/loginpage")}
              shape="round"
              color="blue_gray_100"
              variant="fill"
            >
              로그인
            </Button>
            <Text
              className="absolute inset-x-[0] leading-[100.00px] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center top-[0] tracking-[-0.15px]"
              size="txtInterSemiBold30"
            >
              <>
                회원가입이 완료되었습니다
                <br />
                로그인을 진행해주세요
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignsuccesspagePage;
