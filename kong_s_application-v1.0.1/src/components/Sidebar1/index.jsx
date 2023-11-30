import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-col gap-[7px] items-start justify-start mt-[58px] mx-auto w-[31%]">
          <Img
            className="h-[49px] w-[49px]"
            src="images/img_rewind.svg"
            alt="rewind"
          />
          <Text
            className="ml-1 md:ml-[0] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl tracking-[-0.12px]"
            size="txtABeeZeeRegular24"
          >
            검색
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start mt-[66px] mx-auto w-[42%]">
          <div className="flex flex-col gap-[7px] items-center justify-start w-full">
            <Img className="h-[61px]" src="images/img_home.svg" alt="home" />
            <Text
              className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl tracking-[-0.12px]"
              size="txtABeeZeeRegular24"
            >
              홈
            </Text>
          </div>
          <div className="flex flex-col gap-1.5 items-center justify-start w-full">
            <Img className="h-[57px]" src="images/img_star.svg" alt="star" />
            <Text
              className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl tracking-[-0.12px]"
              size="txtABeeZeeRegular24"
            >
              드라마
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
            <Img
              className="h-[58px]"
              src="images/img_movieicon.svg"
              alt="movieicon"
            />
            <Text
              className="mt-1 text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl tracking-[-0.12px]"
              size="txtABeeZeeRegular24"
            >
              영화
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[13px] items-center justify-start mt-[67px] mx-auto w-[56%]">
          <Img
            className="h-[60px] w-[60px]"
            src="images/img_popcornicon.svg"
            alt="popcornicon"
          />
          <Text
            className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl tracking-[-0.12px]"
            size="txtABeeZeeRegular24"
          >
            시리즈물
          </Text>
        </div>
        <div className="flex flex-col gap-3.5 items-center justify-start mb-[46px] mt-[66px] mx-auto w-[42%]">
          <Img className="h-12" src="images/img_qrcode.svg" alt="qrcode" />
          <Text
            className="text-2xl md:text-[22px] text-center text-red-A400 sm:text-xl tracking-[-0.12px]"
            size="txtABeeZeeRegular24RedA400"
          >
            재추천
          </Text>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
