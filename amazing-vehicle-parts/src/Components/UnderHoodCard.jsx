// import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";

const UnderHoodData = [
  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2022/11/UTHS_DESKTOP_354X252_Winter_1.jpg",
    heading: "Save On New DieHard Tools",
    text: "Get the reliable and dependable tools built to last.",
    id: 1,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2022/11/UTHS_DESKTOP_354X252_Winter_2.jpg",
    heading: "PresStone: Get a $5 Gift Card",
    text: "By mail when you buy any Prestone Platinum Antifreeze.",
    id: 2,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2022/11/UTHS_DESKTOP_354X252_Winter_3.jpg",
    heading: "Hot Deal 2 for $11",
    text: "Increase you MPG with Lucas Fuel Treatmemt. Must buy 2.",
    id: 3,
  },

  {
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2022/11/UTHS_DESKTOP_354X252_Winter_4.jpg",
    heading: "Starting at $21.99",
    text: "Cartquest standerd break pads. Reliable breaks at a great price.",
    id: 4,
  },
];

export default function UnderHoodCard() {
  return (
    <SimpleGrid  columns={[1,2,4]}  gap={6} padding={"10px"}>
      {UnderHoodData.map((el) => (
       
        <Flex direction={"column"}  gap={6}  boxShadow={'2xl'} paddingBottom={"8px"} borderRadius={"10px"} backgroundColor={"white"}>
            <Image src={el.img} borderTopRadius={"10px"} alt="eeorrr"/>

            <Heading fontSize={"25px"}>{el.heading}</Heading>

            <Text fontSize={"20px"}>{el.text}</Text>

        </Flex>
        
         
      
      ))}
    </SimpleGrid>
  );
}
