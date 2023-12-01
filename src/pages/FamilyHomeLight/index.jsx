import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const FamilyHomeLightPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter items-center justify-end mx-auto pt-0.5 w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="md:h-[257px] h-[90px] md:px-5 relative w-full">
            <Img
              className="h-[52px] ml-[35px] mt-[17px]"
              src="images/img_backicon.svg"
              alt="backicon"
            />
            <div className="absolute bg-red-A400 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-end justify-center m-auto pb-1.5 px-1.5 w-full">
              <Img
                className="h-[70px] mb-1 md:mt-0 mt-2.5 w-[70px]"
                src="images/img_backicon.svg"
                alt="back"
              />
              <div className="h-[84px] md:ml-[0] ml-[1060px] relative w-[9%] md:w-full">
                <Text
                  className="absolute bottom-[13%] left-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700_dd tracking-[-0.15px]"
                  size="txtInterSemiBold30"
                >
                  17°
                </Text>
                <Img
                  className="absolute h-[84px] inset-y-[0] my-auto right-[0] w-[84px]"
                  src="images/img_fluentweather.svg"
                  alt="fluentweather"
                />
              </div>
              <Text
                className="mb-3.5 ml-9 md:ml-[0] mr-4 md:mt-0 mt-[30px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[-0.16px]"
                size="txtInterSemiBold32"
              >
                16:11
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-abeezee gap-[11px] items-start justify-between mt-[3px] mx-auto md:px-5 w-full">
            <Sidebar1 className="!sticky !w-40 bg-gray-50 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex-1 font-paytoneone md:h-[1031px] h-[1122px] sm:h-[4145px] md:mt-0 mt-[27px] relative w-full">
              <div className="absolute md:h-[1031px] h-[1122px] sm:h-[4145px] inset-[0] justify-center m-auto w-[97%] md:w-full">
                <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[28%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row gap-[18px] items-start justify-start w-[71%] md:w-full">
                      <Text
                        className="mt-[27px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px]"
                        size="txtABeeZeeRegular25"
                      >
                        주간베스트
                      </Text>
                      <Text
                        className="sm:text-[40px] md:text-[46px] text-[50px] text-red-A400 tracking-[0.16px]"
                        size="txtYellowtailRegular50"
                      >
                        Best
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[18px] items-start justify-start mt-[355px] w-[83%] md:w-full">
                      <Text
                        className="mt-[26px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px]"
                        size="txtABeeZeeRegular25"
                      >
                        장르 기반 추천
                      </Text>
                      <Text
                        className="sm:text-[40px] md:text-[46px] text-[50px] text-red-A400 tracking-[0.16px]"
                        size="txtYellowtailRegular50"
                      >
                        Wow
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-between mt-[313px] w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[-0.13px]"
                        size="txtABeeZeeRegular25"
                      >
                        나를 위한 추천{" "}
                      </Text>
                      <Text
                        className="sm:text-[40px] md:text-[46px] text-[50px] text-red-A400 tracking-[0.16px]"
                        size="txtYellowtailRegular50"
                      >
                        For You
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="sm:h-[1486px] md:h-[301px] h-[329px] relative w-[99%] md:w-full">
                    <div className="absolute flex sm:flex-col flex-row sm:gap-10 inset-x-[0] items-end justify-between mx-auto top-[0] w-full">
                      <Img
                        className="h-[296px] md:h-auto mb-[5px] object-cover"
                        src="images/img_image30.png"
                        alt="imageThirty"
                      />
                      <Img
                        className="common-pointer h-[248px] md:h-auto mb-1 sm:mt-0 mt-[49px] object-cover"
                        src="images/img_image31.png"
                        alt="imageThirtyOne"
                        onClick={() => navigate("/light")}
                      />
                      <Img
                        className="h-64 md:h-auto sm:mt-0 mt-[45px] object-cover"
                        src="images/img_image32.png"
                        alt="imageThirtyTwo"
                      />
                      <Img
                        className="h-[252px] md:h-auto mb-1 sm:mt-0 mt-[45px] object-cover"
                        src="images/img_image31.png"
                        alt="imageThirtyThree"
                      />
                      <Img
                        className="h-[261px] md:h-auto sm:mt-0 mt-10 object-cover"
                        src="images/img_image32.png"
                        alt="imageThirtyFour"
                      />
                    </div>
                    <Text
                      className="absolute bottom-[0] right-[12%] md:text-5xl text-[90px] text-center text-shadow-ts text-white-A700 tracking-[-0.45px]"
                      size="txtPaytoneOneRegular90"
                    >
                      {" "}
                      5
                    </Text>
                    <Text
                      className="absolute bottom-[1%] right-[32%] md:text-5xl text-[90px] text-center text-shadow-ts text-white-A700 tracking-[-0.45px]"
                      size="txtPaytoneOneRegular90"
                    >
                      4
                    </Text>
                    <Text
                      className="absolute bottom-[0] left-[39%] md:text-5xl text-[90px] text-center text-shadow-ts text-white-A700 tracking-[-0.45px]"
                      size="txtPaytoneOneRegular90"
                    >
                      3
                    </Text>
                    <Text
                      className="absolute bottom-[1%] left-[21%] md:text-5xl text-[90px] text-center text-shadow-ts text-white-A700 tracking-[-0.45px]"
                      size="txtPaytoneOneRegular90"
                    >
                      2
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[94px] w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover"
                      src="images/img_image28.png"
                      alt="imageTwentyEight"
                    />
                    <Img
                      className="h-[260px] md:h-auto object-cover"
                      src="images/img_image29.png"
                      alt="imageTwentyNine"
                    />
                    <Img
                      className="h-[260px] md:h-auto object-cover"
                      src="images/img_image4.png"
                      alt="imageFour"
                    />
                    <Img
                      className="h-[260px] md:h-auto object-cover"
                      src="images/img_image5.png"
                      alt="imageFive"
                    />
                    <Img
                      className="h-[260px] md:h-auto object-cover"
                      src="images/img_image9.png"
                      alt="imageNine"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-32 w-full">
                    <Img
                      className="h-[248px] md:h-auto object-cover"
                      src="images/img_image28_248x479.png"
                      alt="imageTwentyEight_One"
                    />
                    <Img
                      className="h-[203px] md:h-auto object-cover"
                      src="images/img_image35.png"
                      alt="imageThirtyFive"
                    />
                    <Img
                      className="h-[203px] md:h-auto object-cover"
                      src="images/img_image35.png"
                      alt="imageThirtySix"
                    />
                    <Img
                      className="h-[203px] md:h-auto object-cover"
                      src="images/img_image35.png"
                      alt="imageThirtySeven"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="absolute left-[0] md:text-5xl text-[120px] text-center text-shadow-ts text-white-A700 top-[24%] tracking-[-0.60px]"
                size="txtPaytoneOneRegular120"
              >
                1
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyHomeLightPage;
