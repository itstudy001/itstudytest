import React from "react";

import { Img, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const SilverclubLightPage = () => {
  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="bg-red-A400 flex md:flex-col flex-row md:gap-5 items-end justify-end pb-1.5 px-1.5 w-full">
            <Img
              className="h-[70px] mb-1 md:mt-0 mt-2.5 w-[70px]"
              src="images/img_backicon.svg"
              alt="back"
            />
            <div className="h-[84px] md:ml-[0] ml-[1060px] md:px-5 relative w-[9%] md:w-full">
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
          <div className="flex md:flex-col flex-row font-abeezee md:gap-[47px] items-start justify-between mt-1 w-full">
            <Sidebar1 className="!sticky !w-40 bg-gray-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
            <div className="flex flex-1 flex-col font-yesevaone items-center justify-start md:mt-0 mt-[67px] md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 tracking-[-0.25px]"
                    size="txtYesevaOneRegular50"
                  >
                    SILVER CLUB
                  </Text>
                  <div className="flex md:flex-col flex-row font-inter gap-1.5 items-center justify-between mt-1 w-full">
                    <Img
                      className="h-[218px] md:h-auto object-cover rounded-[55px]"
                      src="images/img__218x242.png"
                      alt="TwentySeven"
                    />
                    <div className="flex h-[216px] justify-end relative w-4/5 md:w-full">
                      <div className="bg-white-A700_dd flex flex-col md:h-auto h-full items-center justify-center mb-4 ml-[359px] mt-auto p-2.5 rounded-[18px] shadow-bs w-[161px]">
                        <Text
                          className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.11px] w-auto"
                          size="txtInterSemiBold22"
                        >
                          바로 구매하기
                        </Text>
                      </div>
                      <Img
                        className="absolute h-[216px] inset-[0] justify-center m-auto object-cover rounded-[27px] w-full"
                        src="images/img__216x985.png"
                        alt="TwentyEight"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-yantramanav items-center justify-start mt-[50px] w-[99%] md:w-full">
                <div className="flex flex-col gap-[25px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[9px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[-0.15px]"
                    size="txtYantramanavRegular30"
                  >
                    음악이 필요한 오전 8시엔?
                  </Text>
                  <div className="flex md:flex-col flex-row font-inter md:gap-[53px] items-center justify-between w-full">
                    <div className="h-[227px] relative w-[22%] md:w-full">
                      <div className="bg-blue_gray-100_01 h-[227px] m-auto rounded-[131px] w-full"></div>
                      <div className="absolute h-[205px] inset-[0] justify-center m-auto w-[92%]">
                        <Img
                          className="h-[205px] m-auto object-cover rounded-[102px] w-full"
                          src="images/img_1.png"
                          alt="One"
                        />
                        <Text
                          className="absolute bottom-[11%] inset-x-[0] mx-auto sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.14px] w-max"
                          size="txtInterSemiBold28"
                        >
                          #임영웅
                        </Text>
                      </div>
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[52px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[74%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="h-[227px] sm:ml-[0] relative w-full">
                        <div className="bg-blue_gray-100_01 h-[227px] m-auto rounded-[131px] w-full"></div>
                        <Text
                          className="absolute h-max inset-[0] justify-center m-auto sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.14px] w-max"
                          size="txtInterSemiBold28"
                        >
                          #트로트
                        </Text>
                      </div>
                      <div className="h-[227px] sm:ml-[0] relative w-full">
                        <div className="bg-blue_gray-100_01 h-[227px] m-auto rounded-[131px] w-full"></div>
                        <Text
                          className="absolute h-max inset-y-[0] left-[16%] my-auto sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.14px]"
                          size="txtInterSemiBold28"
                        >
                          # 헬로TV뉴스
                        </Text>
                      </div>
                      <div className="h-[227px] sm:ml-[0] relative w-full">
                        <div className="bg-blue_gray-100_01 h-[227px] m-auto rounded-[131px] w-full"></div>
                        <Text
                          className="absolute h-max inset-[0] justify-center m-auto sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.14px] w-max"
                          size="txtInterSemiBold28"
                        >
                          #현재 방송 중
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-yantramanav items-center justify-start mt-[46px] w-[97%] md:w-full">
                <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.18px]"
                    size="txtYantramanavRegular36"
                  >
                    노래 듣기
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-full">
                    <Img
                      className="h-[301px] md:h-auto object-cover"
                      src="images/img_image3.png"
                      alt="imageThree"
                    />
                    <Img
                      className="h-[301px] md:h-auto object-cover"
                      src="images/img_image4.png"
                      alt="imageFour"
                    />
                    <Img
                      className="h-[301px] md:h-auto object-cover"
                      src="images/img_image5.png"
                      alt="imageFive"
                    />
                    <Img
                      className="h-[301px] md:h-auto object-cover"
                      src="images/img_image6.png"
                      alt="imageSix"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-yantramanav gap-[35px] items-start justify-start mt-24 mx-auto md:px-5 w-full">
            <div className="md:h-[287px] h-[338px] relative w-[49%] md:w-full">
              <Img
                className="absolute bottom-[0] h-[287px] object-cover right-[0] w-[49%]"
                src="images/img_image8.png"
                alt="imageEight"
              />
              <Text
                className="absolute left-[0] text-4xl sm:text-[32px] md:text-[34px] text-black-900 top-[0] tracking-[-0.18px]"
                size="txtYantramanavRegular36"
              >
                뉴스 보기
              </Text>
            </div>
            <Img
              className="md:flex-1 h-[268px] sm:h-auto md:mt-0 mt-[51px] object-cover w-[23%] md:w-full"
              src="images/img_image9.png"
              alt="imageNine"
            />
            <Img
              className="md:flex-1 h-[268px] sm:h-auto md:mt-0 mt-[51px] object-cover w-[24%] md:w-full"
              src="images/img_image10.png"
              alt="imageTen"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SilverclubLightPage;
