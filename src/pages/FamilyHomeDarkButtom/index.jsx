import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const FamilyHomeDarkButtomPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-800_01 border border-gray-800_01 border-solid flex flex-col font-inter gap-[30px] items-center justify-end mx-auto pt-0.5 w-full">
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
        <div className="sm:h-[1121px] h-[1122px] md:h-[3643px] max-w-[1373px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col md:gap-10 gap-[60px] h-full inset-[0] items-center justify-center m-auto w-[98%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-[99%] md:w-full">
              <div className="h-[359px] mb-[5px] relative w-[22%] md:w-full">
                <div className="flex flex-row gap-[34px] items-start justify-between mb-[-5.25px] w-[86%] z-[1]">
                  <Text
                    className="mt-[27px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.13px]"
                    size="txtInterBold25WhiteA700"
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
                <Img
                  className="h-[296px] mt-auto mx-auto object-cover w-full"
                  src="images/img_image30.png"
                  alt="imageThirty"
                />
              </div>
              <Img
                className="common-pointer h-[248px] md:h-auto mb-1 md:mt-0 mt-28 object-cover"
                src="images/img_image31.png"
                alt="imageThirtyOne"
                onClick={() => navigate("/dark")}
              />
              <Img
                className="h-64 md:h-auto md:mt-0 mt-[108px] object-cover"
                src="images/img_image32.png"
                alt="imageThirtyTwo"
              />
              <Img
                className="h-[252px] md:h-auto mb-1 md:mt-0 mt-[108px] object-cover"
                src="images/img_image31.png"
                alt="imageThirtyThree"
              />
              <Img
                className="h-[261px] md:h-auto md:mt-0 mt-[103px] object-cover"
                src="images/img_image32.png"
                alt="imageThirtyFour"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <div className="h-[322px] relative w-[39%] md:w-full">
                <div className="flex flex-row items-start justify-between mb-[-6.78px] w-[56%] z-[1]">
                  <Text
                    className="mt-[27px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.13px]"
                    size="txtInterBold25WhiteA700"
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
                <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                  <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-full">
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
                  </div>
                </div>
              </div>
              <Img
                className="h-[260px] md:h-auto md:mt-0 mt-[62px] object-cover"
                src="images/img_image4.png"
                alt="imageFour"
              />
              <Img
                className="h-[260px] md:h-auto md:mt-0 mt-[62px] object-cover"
                src="images/img_image5.png"
                alt="imageFive"
              />
              <Img
                className="h-[260px] md:h-auto md:mt-0 mt-[62px] object-cover"
                src="images/img_image9.png"
                alt="imageNine"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="md:h-[248px] h-[315px] relative w-[41%] md:w-full">
                <div className="md:h-[248px] h-[315px] m-auto w-full">
                  <div className="h-[315px] m-auto w-full">
                    <div className="flex flex-row items-center justify-between mb-[-1.58px] w-[64%] z-[1]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.13px]"
                        size="txtInterBold25WhiteA700"
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
                    <Img
                      className="h-[248px] mt-auto mx-auto object-cover w-full"
                      src="images/img_image28_248x479.png"
                      alt="imageTwentyEight_One"
                    />
                  </div>
                  <Img
                    className="absolute h-[60px] left-[3%] top-[12%] w-[60px]"
                    src="images/img_menuicon.svg"
                    alt="menuicon"
                  />
                </div>
                <Text
                  className="absolute left-[4%] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 top-[30%] tracking-[-0.13px]"
                  size="txtInterBold25"
                >
                  메뉴
                </Text>
              </div>
              <Img
                className="md:flex-1 h-[203px] sm:h-auto ml-1.5 md:ml-[0] md:mt-0 mt-[67px] object-cover w-[19%] md:w-full"
                src="images/img_image35.png"
                alt="imageThirtyFive"
              />
              <Img
                className="md:flex-1 h-[203px] sm:h-auto md:ml-[0] ml-[26px] md:mt-0 mt-[67px] object-cover w-[19%] md:w-full"
                src="images/img_image35.png"
                alt="imageThirtySix"
              />
              <Img
                className="md:flex-1 h-[203px] sm:h-auto md:ml-[0] ml-[26px] md:mt-0 mt-[67px] object-cover w-[19%] md:w-full"
                src="images/img_image35.png"
                alt="imageThirtySeven"
              />
            </div>
          </div>
          <div className="absolute flex md:flex-col flex-row font-paytoneone md:gap-5 items-center justify-start left-[0] top-[24%] w-[88%]">
            <Text
              className="md:text-5xl text-[120px] text-center text-shadow-ts text-white-A700 tracking-[-0.60px]"
              size="txtPaytoneOneRegular120"
            >
              1
            </Text>
            <Text
              className="md:ml-[0] ml-[193px] md:text-5xl text-[90px] text-center text-shadow-ts text-white-A700 tracking-[-0.45px]"
              size="txtPaytoneOneRegular90"
            >
              2
            </Text>
            <Text
              className="md:ml-[0] ml-[116px] md:text-5xl text-[90px] text-center text-shadow-ts text-white-A700 tracking-[-0.45px]"
              size="txtPaytoneOneRegular90"
            >
              3
            </Text>
            <Text
              className="md:ml-[0] ml-[131px] md:text-5xl text-[90px] text-center text-shadow-ts text-white-A700 tracking-[-0.45px]"
              size="txtPaytoneOneRegular90"
            >
              4
            </Text>
            <Text
              className="md:ml-[0] ml-[146px] md:text-5xl text-[90px] text-center text-shadow-ts text-white-A700 tracking-[-0.45px]"
              size="txtPaytoneOneRegular90"
            >
              {" "}
              5
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyHomeDarkButtomPage;
