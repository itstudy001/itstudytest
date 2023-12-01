import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const FrontpageDarkPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-800_01 border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start mb-[77px] w-full">
          <div className="bg-red-A400 flex flex-col items-start justify-start p-2.5 w-full">
            <Img
              className="common-pointer h-[70px] md:ml-[0] ml-[33px] w-[70px]"
              src="images/img_backicon.svg"
              alt="back"
              onClick={() => navigate("/loginpagedark")}
            />
          </div>
          <Text
            className="mt-[122px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 tracking-[-0.15px]"
            size="txtInterSemiBold30WhiteA700"
          >
            Hello tv를 시청할 모드를 선택해주세요.
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[76px] items-center justify-start max-w-[1097px] mt-[51px] mx-auto md:px-5 w-full">
            <div
              className="common-pointer md:h-[643px] h-[644px] relative w-1/2 md:w-full"
              onClick={() => navigate("/familyhomedark")}
            >
              <div className="absolute bg-gray-200 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto outline outline-[1px] outline-white-A700_4c p-[35px] sm:px-5 rounded-[40px] shadow-bs">
                <Text
                  className="mt-[89px] md:text-5xl text-[100px] text-red-A400 tracking-[0.16px]"
                  size="txtYellowtailRegular100"
                >
                  Family
                </Text>
                <Text
                  className="mb-[316px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px]"
                  size="txtInterBold25"
                >
                  많은 기능을 다양하게 이용하고 싶다면?
                </Text>
              </div>
              <div className="absolute bottom-[6%] h-[239px] right-[0] w-[92%] sm:w-full">
                <div className="absolute h-[239px] inset-[0] justify-center m-auto w-[97%] sm:w-full">
                  <Img
                    className="h-[163px] ml-auto mr-[110px] mt-[9px] object-cover rounded-[15px] w-[26%]"
                    src="images/img_.png"
                    alt="FortyFive"
                  />
                  <div className="absolute h-[239px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[239px] m-auto object-cover w-full"
                      src="images/img__239x485.png"
                      alt="FortySix"
                    />
                    <Img
                      className="absolute h-[162px] left-[15%] object-cover rounded-[15px] top-[4%] w-[26%]"
                      src="images/img__162x123.png"
                      alt="FortySeven"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[163px] left-[0] object-cover rounded-[15px] top-[13%] w-1/4"
                  src="images/img__163x123.png"
                  alt="FortyEight"
                />
              </div>
            </div>
            <div
              className="common-pointer bg-gray-200 flex md:flex-1 flex-col items-center justify-end outline outline-[1px] outline-gray-200 pt-[53px] md:px-10 sm:px-5 px-[53px] rounded-[40px] shadow-bs w-[44%] md:w-full"
              onClick={() => navigate("/silverclubdark")}
            >
              <Text
                className="mt-[65px] md:text-5xl text-[100px] text-red-A400 tracking-[0.16px]"
                size="txtYellowtailRegular100"
              >
                Silver
              </Text>
              <Text
                className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px]"
                size="txtInterBold25"
              >
                핵심 기능만 크게 이용하고 싶다면?
              </Text>
              <Img
                className="h-[318px] sm:h-auto mt-[34px] object-cover w-[87%] md:w-full"
                src="images/img__318x320.png"
                alt="Fifty"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontpageDarkPage;
