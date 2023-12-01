import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const FrontpageLightPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start mb-[77px] w-full">
          <div className="bg-red-A400 flex flex-col items-start justify-start p-2.5 w-full">
            <Img
              className="common-pointer h-[70px] md:ml-[0] ml-[33px] w-[70px]"
              src="images/img_backicon.svg"
              alt="back"
              onClick={() => navigate("/")}
            />
          </div>
          <Text
            className="mt-[122px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center tracking-[-0.15px]"
            size="txtInterSemiBold30Black900"
          >
            Hello tv를 시청할 모드를 선택해주세요.
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[76px] items-center justify-start max-w-[1097px] mt-[51px] mx-auto md:px-5 w-full">
            <div
              className="common-pointer md:h-[640px] h-[644px] relative w-1/2 md:w-full"
              onClick={() => navigate("/familyhomelight")}
            >
              <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-center justify-center left-[0] my-auto outline outline-[1px] outline-white-A700_4c p-[30px] sm:px-5 rounded-[40px] shadow-bs">
                <Text
                  className="mt-[94px] md:text-5xl text-[100px] text-red-A400 tracking-[0.16px]"
                  size="txtYellowtailRegular100"
                >
                  Family
                </Text>
                <Text
                  className="mb-[319px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px]"
                  size="txtABeeZeeRegular25"
                >
                  많은 기능을 다양하게 이용하고 싶다면?
                </Text>
              </div>
              <div className="absolute bottom-[6%] h-[239px] right-[0] w-[92%] sm:w-full">
                <div className="absolute h-[239px] inset-[0] justify-center m-auto w-[97%] sm:w-full">
                  <Img
                    className="h-[163px] ml-auto mr-[110px] mt-[9px] object-cover rounded-[15px] w-[26%]"
                    src="images/img_.png"
                    alt="Twelve"
                  />
                  <div className="absolute h-[239px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[239px] m-auto object-cover w-full"
                      src="images/img__239x485.png"
                      alt="Thirteen"
                    />
                    <Img
                      className="absolute h-[162px] left-[15%] object-cover rounded-[15px] top-[4%] w-[26%]"
                      src="images/img__162x123.png"
                      alt="Fourteen"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[163px] left-[0] object-cover rounded-[15px] top-[13%] w-1/4"
                  src="images/img__163x123.png"
                  alt="Fifteen"
                />
              </div>
            </div>
            <div
              className="common-pointer bg-white-A700 flex md:flex-1 flex-col items-center justify-end outline outline-[1px] outline-white-A700_4c pt-12 md:px-10 px-12 sm:px-5 rounded-[40px] shadow-bs w-[44%] md:w-full"
              onClick={() => navigate("/silverclublight")}
            >
              <Text
                className="mt-[70px] md:text-5xl text-[100px] text-red-A400 tracking-[0.16px]"
                size="txtYellowtailRegular100"
              >
                Silver
              </Text>
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px]"
                size="txtABeeZeeRegular25"
              >
                핵심 기능만 크게 이용하고 싶다면?
              </Text>
              <Img
                className="h-[318px] sm:h-auto mt-10 object-cover w-[85%] md:w-full"
                src="images/img__318x320.png"
                alt="Seventeen"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontpageLightPage;
