import React from "react";

import { Button, Img, Text } from "components";

const DarkPage = () => {
  return (
    <>
      <div className="bg-gray-100 border border-black-900 border-solid flex flex-col font-inter items-center justify-start mx-auto w-full">
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
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[998px] items-center justify-end mb-0.5 p-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group13.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1306px] mt-[27px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[673px] md:h-auto object-cover rounded-[38px]"
                  src="images/img_image33.png"
                  alt="imageThirtyThree"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 tracking-[-0.25px]"
                    size="txtInterBold50"
                  >
                    몬스터 주식회사 3D
                  </Text>
                  <Text
                    className="mt-[18px] text-white-A700 text-xl tracking-[-0.10px]"
                    size="txtInterSemiBold20"
                  >
                    2015, 한국, 15세, 드라마, 로맨스
                  </Text>
                  <Text
                    className="leading-[40.00px] mt-[51px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.12px]"
                    size="txtInterSemiBold24"
                  >
                    <>
                      출연
                      <br />
                      성동일,이일화,라미란,김성균,류혜영,혜리,고경표,
                      <br />
                      류준열, 박보검,안재홍,이동휘,최성원
                    </>
                  </Text>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[164px] mt-[77px] w-[181px]">
                    <Button
                      className="cursor-pointer font-semibold h-[50px] text-center text-lg tracking-[-0.09px] w-[175px]"
                      shape="round"
                      color="red_A400"
                      size="lg"
                      variant="fill"
                    >
                      바로 시청하기
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="sm:mt-0 mt-[29px] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 tracking-[-0.18px]"
                size="txtInterSemiBold35WhiteA700"
              >
                1화
              </Text>
              <Text
                className="leading-[50.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.12px]"
                size="txtInterSemiBold24"
              >
                <span className="text-white-A700 font-inter text-left font-semibold">
                  괴물들한테 한 가지 치명적인 문제가 있다면 인간 어린이들이
                  자신들에게 맹독성 독을 감염시킬 수 있다는 것이다. 그래서
                  괴물들은 어린이와 접촉해서
                </span>
                <span className="text-white-A700 tracking-[-1.20px] font-inter text-left font-semibold">
                  는
                </span>
                <span className="text-white-A700 font-inter text-left font-semibold">
                  {" "}
                  절대로 안되는데...
                </span>
              </Text>
              <Text
                className="sm:mt-0 mt-[34px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.12px]"
                size="txtInterSemiBold24"
              >
                60분
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DarkPage;
