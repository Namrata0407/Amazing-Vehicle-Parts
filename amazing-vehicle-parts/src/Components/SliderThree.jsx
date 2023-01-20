// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
// Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../Styles/Swiper.module.css";
// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { StarIcon } from "@chakra-ui/icons";

const SliderDataTwo = [
  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3004/thumb/10271288_ryc_09578_pri_thmb.jpg",
    title: "Refresh your Car",
    description: "Air Freshner Vent Stick",
    price: 455.9,
    id: 1,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2019/seafoam.jpg",
    title: "FRAM",
    description: "AntiFreeze and Coolant",
    price: 675.9,
    id: 2,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3233/thumb/12018674_lco_10003_pri_thmb.jpg",
    title: "Arm & Hamer",
    description: "Car Air Freshner",
    price: 789,
    id: 3,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/5073/thumb/12447463_pst_f301_pri_thmb.jpg",
    title: "FRAM",
    description: "AntiFreeze and Coolant",
    price: 4567,
    id: 4,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3233/thumb/11381933_lco_10977_pri_thmb.jpg",
    title: "Lucas Oil Products",
    description: "High Milege Fuel",
    price: 342,
    id: 5,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3233/thumb/12018674_lco_10003_pri_thmb.jpg",
    title: "Arm & Hamer",
    description: "Car Air Freshner",
    price: 612.34,
    id: 6,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3004/thumb/10271288_ryc_09578_pri_thmb.jpg",
    title: "Refresh your Car",
    description: "Air Freshner Vent Stick",
    price: 678,
    id: 7,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3233/thumb/10436567_lco_10669_pri_thmb.jpg",
    title: "Lucas Oil Products",
    description: "High Milege Fuel",
    price: 7898,
    id: 8,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3004/thumb/10271288_ryc_09578_pri_thmb.jpg",
    title: "Refresh your Car",
    description: "Air Freshner Vent Stick",
    price: 900,
    id: 9,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/5073/thumb/12447461_pst_f401_pri_thmb.jpg",
    title: "FRAM",
    description: "AntiFreeze and Coolant",
    price: 455.95,
    id: 10,
  },
  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3004/thumb/10271288_ryc_09578_pri_thmb.jpg",
    title: "Refresh your Car",
    description: "Air Freshner Vent Stick",
    price: 900,
    id: 11,
  },

//   {
//     img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3233/thumb/12018674_lco_10003_pri_thmb.jpg",
//     title: "Arm & Hamer",
//     description: "Car Air Freshner",
//     price: 800,
//     id: 12,
//   },
];

export default function SliderThree() {
  return (
    <>
      <Swiper
        slidesPerView={4}
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
        {SliderDataTwo.map((el) => (
          <SwiperSlide className={styles.swiperthree}>
            <Image margin={"left"} h={"90px"} src={el.img} alt="error" />

            <Box className={styles.box}>
              <Text fontSize={"16px"} color={"#cc0033"} lineHeight={"22px"} fontWeight={"bold"}>  ₹ {el.price}</Text>

              
              <Flex>
              <StarIcon color={"#FFCC02"}/><StarIcon color={"#FFCC02"}/><StarIcon color={"#FFCC02"}/><StarIcon color={"grey"}/>
              </Flex>

              <Heading
                fontSize={"14px"}
                color={"#666666"}
                lineHeight={"22px"}
                marginTop={"20px"}
              >
                {el.title}
              </Heading>

              <Text color={"#666666"} fontSize={"14px"}>
                {el.description}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
