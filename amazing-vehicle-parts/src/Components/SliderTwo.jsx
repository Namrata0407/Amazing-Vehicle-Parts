// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Heading, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
// Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../Styles/Swiper.module.css";
// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";

const SliderData = [
  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2019/10/Antifreeze.jpg",
    title: "AntiFreeze",
    id: 1,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2019/seafoam.jpg",
    title: "Fuel Treatments",
    id: 2,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/Top-Categories-4-Thermostats.png",
    title: "Thermostats",
    id: 3,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/Top-Categories-14-Floor-Mats.png",
    title: "Floor Mats",
    id: 4,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/04-CQ-Radiator.jpg",
    title: "Radiator",
    id: 5,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/12-AC-Seat-Covers.jpg",
    title: "Seat Covers",
    id: 6,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/landing/battery/diehard/HP-Category-Grid-DieHard-Gold-95x95.jpg",
    title: "Batteries",
    id: 7,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/TC-Brakes.jpg",
    title: "Break Pads & Shoes",
    id: 8,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/TC-FRAM-Oil-and-Filter.jpg",
    title: "Oil Change Bundles",
    id: 9,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/hm-topcat-wipers.jpg",
    title: "Wipers",
    id: 10,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/flyer-lg.jpg",
    title: "Sales Flayer",
    id: 11,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2018/07/brake-rotors.jpg",
    title: "Rotors & Drum",
    id: 12,
  },
];

export default function SliderTwo() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {SliderData.map((el) => (
          <SwiperSlide className={styles.swiperClass}>
            <Image margin={"auto"} h={"120px"} src={el.img} alt="error" />

            <Heading lineHeight={"28px"} fontSize={"20px"} marginTop={"20px"}>
              {el.title}
            </Heading>
            <Flex alignItems={"center"} justifyContent={"center"}>
              <StarIcon color={"#FFCC02"} />
              <StarIcon color={"#FFCC02"} />
              <StarIcon color={"grey"} />
              <StarIcon color={"grey"} />
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
