import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar11 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start mt-[58px] mx-auto w-[31%]">
          <Img
            className="h-[49px] w-[49px]"
            src="images/img_rewind_white_a700.svg"
            alt="rewind"
          />
          <Text
            className="ml-1 md:ml-[0] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.12px]"
            size="txtInterRegular24"
          >
            검색
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start mt-16 mx-auto w-[42%]">
          <div className="flex flex-col gap-[7px] items-center justify-start w-full">
            <Img
              className="h-[61px]"
              src="images/img_home_white_a700.svg"
              alt="home"
            />
            <Text
              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.12px]"
              size="txtABeeZeeRegular24WhiteA700"
            >
              홈
            </Text>
          </div>
          <div className="flex flex-col gap-1.5 items-center justify-start w-full">
            <Img
              className="h-[57px]"
              src="images/img_star_white_a700.svg"
              alt="star"
            />
            <Text
              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.12px]"
              size="txtABeeZeeRegular24WhiteA700"
            >
              드라마
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
            <Img
              className="h-[58px]"
              src="images/img_thumbsup.svg"
              alt="thumbsup"
            />
            <Text
              className="mt-1 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.12px]"
              size="txtABeeZeeRegular24WhiteA700"
            >
              영화
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[13px] items-center justify-start mt-[67px] mx-auto w-[56%]">
          <Img
            className="h-[60px] w-[60px]"
            src="images/img_popcornicon_white_a700.svg"
            alt="popcornicon"
          />
          <Text
            className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.12px]"
            size="txtABeeZeeRegular24WhiteA700"
          >
            시리즈물
          </Text>
        </div>
        <div className="flex flex-col gap-[5px] items-center justify-start mb-[46px] mt-[57px] mx-auto w-[42%]">
          <Button
            className="flex h-[66px] items-center justify-center w-[66px]"
            shape="circle"
            color="red_A400"
            size="md"
            variant="fill"
          >
            <Img src="images/img_qrcode_white_a700.svg" alt="qrcode" />
          </Button>
          <Text
            className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[-0.12px]"
            size="txtABeeZeeRegular24WhiteA700"
          >
            재추천
          </Text>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
