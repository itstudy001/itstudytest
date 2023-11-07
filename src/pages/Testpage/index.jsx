import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img } from "components";

const TestpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto py-[22px] w-full">
        <div className="flex flex-col items-center justify-start mb-[262px] w-full">
          <div className="bg-red-A400 h-[90px] w-full"></div>
          <Img
            className="h-[135px] md:h-auto mt-[265px] object-cover w-[16%]"
            src="images/img_hello.png"
            alt="hello"
          />
          <div className="flex flex-row sm:gap-10 items-center justify-between mt-[178px] md:px-5 w-1/2 md:w-full">
            <Button
              className="cursor-pointer font-semibold h-[50px] text-center text-lg tracking-[-0.09px] w-[175px]"
              shape="round"
              color="blue_gray_100"
              variant="fill"
            >
              vod
            </Button>
            <Button
              className="common-pointer cursor-pointer font-semibold h-[50px] text-center text-lg tracking-[-0.09px] w-[175px]"
              onClick={() => navigate("/loginpage")}
              shape="round"
              color="blue_gray_100"
              variant="fill"
            >
              로그인
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestpagePage;
