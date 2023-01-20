import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";
import slider1 from "../Images/slider1.jpg";
import slider2 from "../Images/slider2.jpg";
import slider3 from "../Images/slider3.jpg";
import slider4 from "../Images/slider4.jpg";
import slider5 from "../Images/slider5.jpg";
import slider6 from "../Images/slider6.jpg";
import slider7 from "../Images/slider7.jpg";
import sliderimgone from "../Images/sliderimgone.png";



export default function Slider() {
  return (
    <Box position={"relative"} zIndex={8}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={"100%"}
            height={"450px"}
            src={sliderimgone}
            alt="slider1"
            zIndex={1}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={"100%"}
            height={"450px"}
            src={slider7}
            alt="slider1"
            zIndex={1}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={"100%"}
            height={"450px"}
            src={slider6}
            alt="slider1"
            zIndex={1}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={"100%"}
            height={"450px"}
            src={slider5}
            alt="slider1"
            zIndex={1}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={"100%"}
            height={"450px"}
            src={slider1}
            alt="slider1"
            zIndex={1}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={"100%"}
            height={"450px"}
            src={slider2}
            alt="slider1"
            zIndex={1}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={"100%"}
            height={"450px"}
            src={slider3}
            alt="slider1"
            zIndex={1}
          />
        </SwiperSlide>


        <SwiperSlide>
          <Image
            width={"100%"}
            height={"450px"}
            src={slider4}
            alt="slider1"
            zIndex={1}
          />
        </SwiperSlide>


      </Swiper>
    </Box>
  );
}
