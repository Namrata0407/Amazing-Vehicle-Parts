import {
  Flex,
  Text,
  SimpleGrid,
  Image,
  Heading,
  Divider,
  GridItem,
  Box,
} from "@chakra-ui/react";
import BlackCards from "../Components/BlackCards";
import Slider from "../Components/Slider";
import UnderHoodCard from "../Components/UnderHoodCard";
import source3 from "../Images/img3.png";
import styles from "../Styles/Home.module.css";
import phone1 from "../Images/phone1.png";
import phone2 from "../Images/phone2.png";
import phone3 from "../Images/phone3.png";
import topCategiores from "../Images/topCategory.png";
import topSellers from "../Images/topSellers.png";
import SliderTwo from "../Components/SliderTwo";
import SliderThree from "../Components/SliderThree";
import costumerFav from "../Images/customer.png";
import findMyStore from "../Images/findMyStore.png";



function Home() {
  return (
    <>
      <Slider />
      <Divider />
      {/*********************************************************************************************************************************************/}

      <Box className={styles.paddingLeftRight}>
        <SimpleGrid
          columns={[1, 1, 3]}
          spacing="20px"
          padding={"20px"}
          // border={"2px dashed blue"}
          backgroundColor={"#000000"}
        >
          <Flex
            direction={"column"}
            padding={"5px"}
            borderRadius={"8px"}
            borderTopLeftRadius={"40px"}
            justifyContent={"center"}
            alignItems={"start"}
            backgroundColor={"white"}
          >
            <Flex gap={"5px"} marginLeft={"15px"}>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSItLjUgLTEgNDEgNDEiIGZpbGw9ImJsYWNrIiBhcmlhLWhpZGRlbj0idHJ1ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RG9sbGFyIFNpZ248L3RpdGxlPjxwYXRoIGZpbGw9ImJsYWNrIiBkPSJNMjAgNC44MzU5OGUtMDVDMTYuMDQ0NCA0LjgzNTk4ZS0wNSAxMi4xNzc2IDEuMTczMDMgOC44ODg2IDMuMzcwNjZDNS41OTk2MiA1LjU2ODI4IDMuMDM2MTcgOC42OTE4NiAxLjUyMjQyIDEyLjM0NjRDMC4wMDg2NjU1OSAxNi4wMDA5IC0wLjM4NzQwMSAyMC4wMjIyIDAuMzg0MzAzIDIzLjkwMTlDMS4xNTYwMSAyNy43ODE1IDMuMDYwODIgMzEuMzQ1MSA1Ljg1Nzg3IDM0LjE0MjJDOC42NTQ5MiAzNi45MzkyIDEyLjIxODYgMzguODQ0IDE2LjA5ODIgMzkuNjE1OEMxOS45Nzc4IDQwLjM4NzUgMjMuOTk5MiAzOS45OTE0IDI3LjY1MzcgMzguNDc3NkMzMS4zMDgyIDM2Ljk2MzkgMzQuNDMxOCAzNC40MDA0IDM2LjYyOTQgMzEuMTExNEMzOC44MjcgMjcuODIyNSA0MCAyMy45NTU3IDQwIDIwQzQwLjAxMDkgMTcuMzcwNiAzOS41MDEgMTQuNzY1IDM4LjQ5OTggMTIuMzMzNUMzNy40OTg1IDkuOTAyMTEgMzYuMDI1NyA3LjY5MyAzNC4xNjY0IDUuODMzNjZDMzIuMzA3MSAzLjk3NDMyIDMwLjA5NzkgMi41MDE1NCAyNy42NjY1IDEuNTAwM0MyNS4yMzUxIDAuNDk5MDYxIDIyLjYyOTUgLTAuMDEwODI5IDIwIDQuODM1OThlLTA1VjQuODM1OThlLTA1Wk0xOC42NjY3IDE2LjQ0NDVDMTkuMzI2MSAxNy4xMzIyIDIwLjA3MzIgMTcuNzI5OSAyMC44ODg5IDE4LjIyMjNDMjIuNjU4NiAxOC43ODYyIDI0LjI2MTcgMTkuNzc4NSAyNS41NTU2IDIxLjExMTJDMjYuMTE2NSAyMS43NDM3IDI2LjU0MzYgMjIuNDgzMiAyNi44MTA5IDIzLjI4NTNDMjcuMDc4MyAyNC4wODczIDI3LjE4MDQgMjQuOTM1MiAyNy4xMTExIDI1Ljc3NzhDMjcuMTYxNCAyNi41ODQ5IDI3LjA0OTYgMjcuMzk0IDI2Ljc4MjUgMjguMTU3M0MyNi41MTUzIDI4LjkyMDUgMjYuMDk4MiAyOS42MjI3IDI1LjU1NTYgMzAuMjIyM0MyNC40MjM0IDMxLjM1OTUgMjIuOTMwNCAzMi4wNjY3IDIxLjMzMzMgMzIuMjIyM1YzNS41NTU2SDE4Ljg4ODlWMzIuMjIyM0MxNy4xNzQ3IDMyLjA4ODEgMTUuNTgwMyAzMS4yOTA5IDE0LjQ0NDUgMzBDMTMuODExMiAyOS4yNzIyIDEzLjMyODEgMjguNDI2MiAxMy4wMjMgMjcuNTEwOUMxMi43MTc5IDI2LjU5NTYgMTIuNTk2OCAyNS42MjkgMTIuNjY2NyAyNC42NjY3SDE3LjExMTFDMTYuOTk1MSAyNS43Nzk2IDE3LjMxMzYgMjYuODk0MiAxOCAyNy43Nzc4QzE4LjIyMzcgMjguMDkxIDE4LjUyNzEgMjguMzM4NyAxOC44Nzg4IDI4LjQ5NUMxOS4yMzA1IDI4LjY1MTMgMTkuNjE3NiAyOC43MTA2IDIwIDI4LjY2NjdDMjAuMzUwOCAyOC43MDkyIDIwLjcwNjQgMjguNjQ3NSAyMS4wMjI1IDI4LjQ4OTVDMjEuMzM4NiAyOC4zMzE1IDIxLjYwMTIgMjguMDg0IDIxLjc3NzggMjcuNzc3OEMyMi4yNTg5IDI3LjE0MDggMjIuNDk1NSAyNi4zNTIzIDIyLjQ0NDUgMjUuNTU1NkMyMi40NjA4IDI0Ljc2MzMgMjIuMjI3NiAyMy45ODU5IDIxLjc3NzggMjMuMzMzNEMyMS4yMDEzIDIyLjcwODMgMjAuNTI1NSAyMi4xODI3IDE5Ljc3NzggMjEuNzc3OEMxNy45NzA4IDIxLjE1MjYgMTYuMzA4MiAyMC4xNzAyIDE0Ljg4ODkgMTguODg4OUMxNC4zMjc5IDE4LjI1NjQgMTMuOTAwOSAxNy41MTY4IDEzLjYzMzUgMTYuNzE0OEMxMy4zNjYyIDE1LjkxMjggMTMuMjY0MSAxNS4wNjQ5IDEzLjMzMzMgMTQuMjIyM0MxMy4yODMxIDEzLjQxNTEgMTMuMzk0OCAxMi42MDYxIDEzLjY2MiAxMS44NDI4QzEzLjkyOTEgMTEuMDc5NiAxNC4zNDYzIDEwLjM3NzQgMTQuODg4OSA5Ljc3NzgzQzE2LjAyMTEgOC42NDA3OCAxNy41MTQxIDcuOTMzNiAxOS4xMTExIDcuNzc3ODNWNC40NDQ0OUgyMS41NTU2VjguMDAwMDVDMjIuMzM1OSA4LjA4ODQ0IDIzLjA5MSA4LjMzMDI5IDIzLjc3NzUgOC43MTE2N0MyNC40NjQgOS4wOTMwNSAyNS4wNjgzIDkuNjA2NDMgMjUuNTU1NiAxMC4yMjIzQzI2LjU5NTUgMTEuNjM3NSAyNy4xNDIgMTMuMzU1MSAyNy4xMTExIDE1LjExMTJIMjIuNDQ0NUMyMi40ODY1IDE0LjEwNTcgMjIuMjU2MSAxMy4xMDc2IDIxLjc3NzggMTIuMjIyM0MyMS42MDEyIDExLjkxNjEgMjEuMzM4NiAxMS42Njg2IDIxLjAyMjUgMTEuNTEwNkMyMC43MDY0IDExLjM1MjUgMjAuMzUwOCAxMS4yOTA5IDIwIDExLjMzMzRDMTkuNjc5MSAxMS4yOTA0IDE5LjM1MyAxMS4zNTQxIDE5LjA3MTkgMTEuNTE0N0MxOC43OTA4IDExLjY3NTMgMTguNTcwMyAxMS45MjQgMTguNDQ0NSAxMi4yMjIzQzE4LjE0NDQgMTIuOTI0NCAxNy45OTMxIDEzLjY4MSAxOCAxNC40NDQ1QzE4LjE1MzkgMTUuMTMyIDE4LjM3NzMgMTUuODAyMSAxOC42NjY3IDE2LjQ0NDVWMTYuNDQ0NVoiLz48L3N2Zz4="
                alt="image"
              />
              <Heading fontSize={"25px"}>Rain-X: $15 Gift Card</Heading>
            </Flex>
            <Text marginLeft={"15px"} textAlign={"start"}>
              By mail on 2 Rain-X Silicone AdvantEdge Maximum Performance Beam
              Wiper Blades.
            </Text>
          </Flex>

          <Flex
            direction={"column"}
            backgroundColor={"white"}
            borderRadius={"8px"}
            borderTopLeftRadius={"40px"}
            justifyContent={"center"}
            alignItems={"start"}
          >
            <Flex gap={"5px"} marginLeft={"15px"}>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiIGZpbGw9IiMwMDAiIGFyaWEtaGlkZGVuPSJ0cnVlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwMCA1MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik05Ny40LDE5MC4ySDE0MHYxNUg5Ny40VjE5MC4yeiBNMzY4LjQsMjI1di0yMC40aC0yMC42di0xNGgyMC42di0yMC4zaDEzLjd2MjAuM2gyMC42djE0aC0yMC42VjIyNUgzNjguNHogTTQ2MS41LDEzMS40aC00MjN2Mjk1LjJoNDIzTDQ2MS41LDEzMS40TDQ2MS41LDEzMS40eiBNMzE4LjQsMTYwLjJsLTU0LDg0LjZsMzYuMi0xMS41TDE4MS42LDM5NS40bDU3LjctMTE2LjZsLTM5LjksMTQuMSBMMjU0LjksMTkxTDMxOC40LDE2MC4yeiBNMzU1LjUsOTMuN1Y3My40aDQ3Ljl2MjAuMmg4MC4xdjI2LjJoLTQ2N1Y5My43aDg3LjdWNzMuNGg0Ny45djIwLjJMMzU1LjUsOTMuN0wzNTUuNSw5My43eiIgZmlsbD0iIzAwMCIvPjwvZz48L3N2Zz4="
                alt="image"
              />
              <Heading fontSize={"25px"}>DieHard: $10 Gift Card</Heading>
            </Flex>
            <Text marginLeft={"15px"} textAlign={"start"}>
              By mail when you buy any DieHard platinum automotive battery.
            </Text>
          </Flex>

          <Flex
            direction={"column"}
            backgroundColor={"white"}
            padding={"5px"}
            borderRadius={"8px"}
            borderTopLeftRadius={"40px"}
            justifyContent={"center"}
            alignItems={"start"}
          >
            <Flex gap={"5px"} marginLeft={"15px"}>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiIHZpZXdCb3g9IjAgMCAzNyAzMyIgYXJpYS1oaWRkZW49InRydWUiIGZpbGw9ImJsYWNrIj48dGl0bGU+Q2FyIFJlZGVzaWduPC90aXRsZT48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM1Ljc3NzIgMTMuMzU1MUMzNS45NzYyIDE0LjA3MTQgMzYuMDc3MSAxNC44MTE1IDM2LjA3NzIgMTUuNTU1MVYzMC40MzUxQzM2LjA3NzIgMzEuNTM5NiAzNS4xODE3IDMyLjQzNTEgMzQuMDc3MiAzMi40MzUxSDMyLjA3NzJDMzAuOTcyNiAzMi40MzUxIDMwLjA3NzIgMzEuNTM5NiAzMC4wNzcyIDMwLjQzNTFWMjguNDM1MUg2LjA3NzE3VjMwLjQzNTFDNi4wNzcxNyAzMS41Mzk2IDUuMTgxNzQgMzIuNDM1MSA0LjA3NzE3IDMyLjQzNTFIMi4wNzcxN0MwLjk3MjYwMiAzMi40MzUxIDAuMDc3MTcxNSAzMS41Mzk2IDAuMDc3MTcxNSAzMC40MzUxVjE1LjU1NTFDMC4wNzUzOTUyIDE0LjgwNDggMC4xNzYzMzIgMTQuMDU3OSAwLjM3NzE3MSAxMy4zMzUxTDMuMjU3MTcgMy4zMzUwNkMzLjc0MzQyIDEuNjM0NiA1LjI4ODY4IDAuNDU1MzMyIDcuMDU3MTcgMC40MzUwNTlIMjkuMDU3MkMzMC44NDYxIDAuNDQwMTc4IDMyLjQxNDIgMS42MzI1NCAzMi44OTcyIDMuMzU1MDZMMzUuNzc3MiAxMy4zNTUxWk03LjA5NzE0IDMuOTM1MDZDNi44NzQ5MiAzLjkzNTA2IDYuNjc5MzYgNC4wODE3MyA2LjYxNzE0IDQuMjk1MDZMNC4yOTcxNCAxMi40MzUxSDMxLjg1NzFMMjkuNTc3MSA0LjI5NTA2QzI5LjUxNDkgNC4wODE3MyAyOS4zMTk0IDMuOTM1MDYgMjkuMDk3MSAzLjkzNTA2SDcuMDk3MTRaTTEwLjA3NzIgMjAuNDM1MUMxMC4wNzcyIDIxLjUzOTYgOS4xODE3NCAyMi40MzUxIDguMDc3MTcgMjIuNDM1MUg2LjA3NzE3QzQuOTcyNiAyMi40MzUxIDQuMDc3MTcgMjEuNTM5NiA0LjA3NzE3IDIwLjQzNTFWMTguNDM1MUM0LjA3NzE3IDE3LjMzMDUgNC45NzI2IDE2LjQzNTEgNi4wNzcxNyAxNi40MzUxSDguMDc3MTdDOS4xODE3NCAxNi40MzUxIDEwLjA3NzIgMTcuMzMwNSAxMC4wNzcyIDE4LjQzNTFWMjAuNDM1MVpNMzAuMDc3MiAyMi40MzUxQzMxLjE4MTcgMjIuNDM1MSAzMi4wNzcyIDIxLjUzOTYgMzIuMDc3MiAyMC40MzUxVjE4LjQzNTFDMzIuMDc3MiAxNy4zMzA1IDMxLjE4MTcgMTYuNDM1MSAzMC4wNzcyIDE2LjQzNTFIMjguMDc3MkMyNi45NzI2IDE2LjQzNTEgMjYuMDc3MiAxNy4zMzA1IDI2LjA3NzIgMTguNDM1MVYyMC40MzUxQzI2LjA3NzIgMjEuNTM5NiAyNi45NzI2IDIyLjQzNTEgMjguMDc3MiAyMi40MzUxSDMwLjA3NzJaIiBmaWxsPSIjMUUxRTFFIi8+PC9zdmc+"
                alt="image"
              />
              <Heading fontSize={"25px"}>Sylvania: $15 Gift Card</Heading>
            </Flex>
            <Text marginLeft={"15px"} textAlign={"start"}>
              By mail on a Sylvania SilverStar Ultra twin-pack or 2 single pack
              headlites.
            </Text>
          </Flex>
        </SimpleGrid>

        {/* ****************************************************************************************************************************************************   */}
         
       <Image src = {topCategiores} alt = "error" marginTop={"40px"}/>
       
       <SliderTwo />

{/* ************************************************************************************************************************************* */}
        <Box>
          <BlackCards />
        </Box>

        {/* ********************************************************************************************************************************************* */}
        <Divider />
        <Box>
          <Image src={source3} alt="error" marginTop={"45px"} />

          <UnderHoodCard />
        </Box>


        
 {/* ************************************************************************************************************************************ */}
    
    <Image marginTop={"20px"} src = {topSellers}/>

<SliderThree/>

        {/* ***************************************************************************************************************************************** */}

        <SimpleGrid
          backgroundColor={"#FFCC02"}
          columns={[1, 1, 3]}
          marginTop={"50px"}
          borderRadius={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <GridItem>
            <Image borderRadius={"20px"} src={phone1} alt="error" />
          </GridItem>

          <GridItem>
            <Image
              height={"300px"}
              src={phone2}
              alt="error"
              marginTop={"-44px"}
              marginLeft={"150px"}
            />
          </GridItem>

          <GridItem>
            <Image
              src={phone3}
              alt="error"
              h={"130"}
              w={"130"}
              marginLeft={"150px"}
            />
          </GridItem>
        </SimpleGrid>

        {/* ************************************************************************************************************************************** */}

        <SimpleGrid columns={[1,2,2]} gap={6} marginTop={"20px"} textAlign={"start"} >

         
         <Box h={"100%"}>
         <Flex backgroundColor={"#1E1E1E"} padding={"30px"} gap={"20px"} borderTopRadius={"10px"}  h={"100%"}>
            <Image h={"50px"} w={"50px"} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OSIgZmlsbD0iI0ZGRiIgYXJpYS1oaWRkZW49InRydWUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkNpcmNsZSBTcGVlZCBQZXJrczwvdGl0bGU+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNC41NTA0IiByPSIyMi41IiBmaWxsPSIjMUUxRTFFIiBzdHJva2U9IiNGRkNDMDAiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Ik0xNy41MTQxIDI1LjY2MTNMMTcuNDM2NCAyNS41ODg4QzE2Ljg3OTQgMjQuOTY3MSAxNi41MTIyIDI0LjE5MTggMTYuMzgwMiAyMy4zNTg1SDEwLjgzOTJMOS4zMjM3MyAyNS42NjE3TDE3LjUxNDEgMjUuNjYxM1oiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE2LjQxMjEgMjIuMTMxNUMxNi41NDY2IDIxLjMwODkgMTYuODQ2NyAyMC41MjM5IDE3LjI5MzEgMTkuODI2NUgxMy4xNjM1TDExLjY0ODkgMjIuMTMxNUgxNi40MTIxWiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMTYuNTM5OSAyNi44OTRIOC41MTI3OUw3IDI5LjE5MjJIMTQuOTYyMUwxNi41Mzk5IDI2Ljg5NFoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTM2LjE3ODIgMTguMDM4N0gzMC40NDU0TDI2LjIzMSAzMS4zMzg5SDMwLjU5MTVMMzEuODYxMSAyNy4zNDA1SDM0LjE3MjlDMzYuNjk0MSAyNy4zNDA1IDM4LjgyMjggMjUuNjM4MSAzOS42ODMyIDIyLjkyNDVDNDAuNzI5MyAxOS42MjU5IDM5LjA4NTcgMTguMDM4NyAzNi4xNzgyIDE4LjAzODdaTTM1LjQwMzkgMjIuNzYzOUMzNS4wNjI3IDIzLjg0MDggMzQuMTYwNiAyMy45Nzg5IDMzLjM2NTYgMjMuOTc4OUgzMi45MTk1TDMzLjY1MjcgMjEuNjY4MUgzNC4wODExQzM0LjgzMDUgMjEuNjcwOCAzNS43Mzc1IDIxLjcyNDggMzUuNDAzNCAyMi43NjUyTDM1LjQwMzkgMjIuNzYzOVoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTI0LjkzNTggMjMuMTQyM0MyNC4yMzQ2IDIyLjkxNjUgMjMuNTE2OSAyMi43NDg1IDIyLjc4OTYgMjIuNjQwMUMyMi40NzA4IDIyLjU1MDEgMjEuNzUzMSAyMi40MTA2IDIxLjkxNDIgMjEuOTEyNUMyMi4wODk4IDIxLjM1NjcgMjIuODkwNSAyMS4yNzM5IDIzLjI5MTMgMjEuMjczOUMyNC4zODU0IDIxLjM1MjggMjUuNDI5MiAyMS43NzU1IDI2LjI4MDUgMjIuNDg0NEwyOC41OTI3IDE5LjM3NTdDMjcuMzQ2MSAxOC40MTY3IDI1Ljg4MjEgMTcuNzk4NSAyNC4zMzgzIDE3LjU3OTJDMjQuMTM1OCAxNy41NTYgMjMuOTMxOSAxNy41NDY4IDIzLjcyODEgMTcuNTUxOEMyMi43NTM4IDE3LjU0NDUgMjEuNzg4MyAxNy43NDI2IDIwLjg5MTggMTguMTM0QzE5Ljk5NTMgMTguNTI1MyAxOS4xODY5IDE5LjEwMTUgMTguNTE2OCAxOS44MjY2QzE3Ljk0MjcgMjAuNDc4NyAxNy41NDQ5IDIxLjI3MzMgMTcuMzYyNiAyMi4xMzE2QzE3LjMyODggMjIuMjk3NyAxNy4zMDI5IDIyLjQ2NiAxNy4yODMyIDIyLjY0MDFDMTcuMTIzOCAyNC4yMDcxIDE4LjczNTggMjUuODcwMyAyMC40MTgxIDI2LjIxMzNMMjEuMjc5NCAyNi4zOTMzQzIxLjY3OCAyNi40ODEgMjIuMjU3NSAyNi41MzU5IDIyLjA2NDggMjcuMTQyNUMyMS44NzIgMjcuNzQ5MiAyMS4wOTI0IDI3Ljk0NzIgMjAuNjM5OCAyNy45NDcyQzIwLjE2NiAyNy45MzM3IDE5LjcwMDUgMjcuODE2OCAxOS4yNzQzIDI3LjYwNDRDMTguODQ4MiAyNy4zOTE5IDE4LjQ3MTEgMjcuMDg4NyAxOC4xNjgyIDI2LjcxNUwxNy45OTg4IDI2LjUxNTJMMTUuMzgyMyAzMC4zMjE5QzE2LjczNTMgMzEuMTM0MyAxOC4yNzYzIDMxLjU1OTEgMTkuODQ0MyAzMS41NTE4QzIyLjU2NjEgMzEuNTUxOCAyNS43MzMgMzAuNTM0OCAyNi43NDkzIDI3LjMyNTJDMjYuODk4NCAyNi45MjkyIDI2Ljk2OTggMjYuNTA2OCAyNi45NTk2IDI2LjA4MjRDMjYuOTQ5NCAyNS42NTggMjYuODU3OCAyNS4yMzk4IDI2LjY4OTkgMjQuODUxOEMyNi41MjIgMjQuNDYzNyAyNi4yODEyIDI0LjExMzMgMjUuOTgxMiAyMy44MjA2QzI1LjY4MTIgMjMuNTI3OSAyNS4zMjggMjMuMjk4NyAyNC45NDE1IDIzLjE0NTlMMjQuOTM1OCAyMy4xNDIzWiIgZmlsbD0id2hpdGUiLz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzkyNl8xMDc0MyI+PHJlY3Qgd2lkdGg9IjMzIiBoZWlnaHQ9IjE0IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyAxNy41NTA0KSIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==" alt ="error"/>
          
          <Box h={"100%"}>
          <Heading  fontSize={"24px"} color={"#ffcc00"}>Find The Perfect Battery</Heading>
            <Text fontSize={"16px"} color={"#f4f4f4"}>Our new Diehard battery Recommander Tool gives a Personalized recommendation.</Text>
          </Box>
                 
          </Flex>
          <Divider h={"5px"} backgroundColor={"#ffcc00"} />
         </Box>



          <Box h={"100%"}>
          <Flex backgroundColor={"#1E1E1E"} padding={"30px"} gap={"20px"} borderTopRadius={"10px"} h={"100%"}>
            <Image h={"50px"} w={"50px"} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OSIgZmlsbD0iI0ZGRiIgYXJpYS1oaWRkZW49InRydWUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkNpcmNsZSBTcGVlZCBQZXJrczwvdGl0bGU+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNC41NTA0IiByPSIyMi41IiBmaWxsPSIjMUUxRTFFIiBzdHJva2U9IiNGRkNDMDAiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Ik0xNy41MTQxIDI1LjY2MTNMMTcuNDM2NCAyNS41ODg4QzE2Ljg3OTQgMjQuOTY3MSAxNi41MTIyIDI0LjE5MTggMTYuMzgwMiAyMy4zNTg1SDEwLjgzOTJMOS4zMjM3MyAyNS42NjE3TDE3LjUxNDEgMjUuNjYxM1oiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE2LjQxMjEgMjIuMTMxNUMxNi41NDY2IDIxLjMwODkgMTYuODQ2NyAyMC41MjM5IDE3LjI5MzEgMTkuODI2NUgxMy4xNjM1TDExLjY0ODkgMjIuMTMxNUgxNi40MTIxWiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMTYuNTM5OSAyNi44OTRIOC41MTI3OUw3IDI5LjE5MjJIMTQuOTYyMUwxNi41Mzk5IDI2Ljg5NFoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTM2LjE3ODIgMTguMDM4N0gzMC40NDU0TDI2LjIzMSAzMS4zMzg5SDMwLjU5MTVMMzEuODYxMSAyNy4zNDA1SDM0LjE3MjlDMzYuNjk0MSAyNy4zNDA1IDM4LjgyMjggMjUuNjM4MSAzOS42ODMyIDIyLjkyNDVDNDAuNzI5MyAxOS42MjU5IDM5LjA4NTcgMTguMDM4NyAzNi4xNzgyIDE4LjAzODdaTTM1LjQwMzkgMjIuNzYzOUMzNS4wNjI3IDIzLjg0MDggMzQuMTYwNiAyMy45Nzg5IDMzLjM2NTYgMjMuOTc4OUgzMi45MTk1TDMzLjY1MjcgMjEuNjY4MUgzNC4wODExQzM0LjgzMDUgMjEuNjcwOCAzNS43Mzc1IDIxLjcyNDggMzUuNDAzNCAyMi43NjUyTDM1LjQwMzkgMjIuNzYzOVoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTI0LjkzNTggMjMuMTQyM0MyNC4yMzQ2IDIyLjkxNjUgMjMuNTE2OSAyMi43NDg1IDIyLjc4OTYgMjIuNjQwMUMyMi40NzA4IDIyLjU1MDEgMjEuNzUzMSAyMi40MTA2IDIxLjkxNDIgMjEuOTEyNUMyMi4wODk4IDIxLjM1NjcgMjIuODkwNSAyMS4yNzM5IDIzLjI5MTMgMjEuMjczOUMyNC4zODU0IDIxLjM1MjggMjUuNDI5MiAyMS43NzU1IDI2LjI4MDUgMjIuNDg0NEwyOC41OTI3IDE5LjM3NTdDMjcuMzQ2MSAxOC40MTY3IDI1Ljg4MjEgMTcuNzk4NSAyNC4zMzgzIDE3LjU3OTJDMjQuMTM1OCAxNy41NTYgMjMuOTMxOSAxNy41NDY4IDIzLjcyODEgMTcuNTUxOEMyMi43NTM4IDE3LjU0NDUgMjEuNzg4MyAxNy43NDI2IDIwLjg5MTggMTguMTM0QzE5Ljk5NTMgMTguNTI1MyAxOS4xODY5IDE5LjEwMTUgMTguNTE2OCAxOS44MjY2QzE3Ljk0MjcgMjAuNDc4NyAxNy41NDQ5IDIxLjI3MzMgMTcuMzYyNiAyMi4xMzE2QzE3LjMyODggMjIuMjk3NyAxNy4zMDI5IDIyLjQ2NiAxNy4yODMyIDIyLjY0MDFDMTcuMTIzOCAyNC4yMDcxIDE4LjczNTggMjUuODcwMyAyMC40MTgxIDI2LjIxMzNMMjEuMjc5NCAyNi4zOTMzQzIxLjY3OCAyNi40ODEgMjIuMjU3NSAyNi41MzU5IDIyLjA2NDggMjcuMTQyNUMyMS44NzIgMjcuNzQ5MiAyMS4wOTI0IDI3Ljk0NzIgMjAuNjM5OCAyNy45NDcyQzIwLjE2NiAyNy45MzM3IDE5LjcwMDUgMjcuODE2OCAxOS4yNzQzIDI3LjYwNDRDMTguODQ4MiAyNy4zOTE5IDE4LjQ3MTEgMjcuMDg4NyAxOC4xNjgyIDI2LjcxNUwxNy45OTg4IDI2LjUxNTJMMTUuMzgyMyAzMC4zMjE5QzE2LjczNTMgMzEuMTM0MyAxOC4yNzYzIDMxLjU1OTEgMTkuODQ0MyAzMS41NTE4QzIyLjU2NjEgMzEuNTUxOCAyNS43MzMgMzAuNTM0OCAyNi43NDkzIDI3LjMyNTJDMjYuODk4NCAyNi45MjkyIDI2Ljk2OTggMjYuNTA2OCAyNi45NTk2IDI2LjA4MjRDMjYuOTQ5NCAyNS42NTggMjYuODU3OCAyNS4yMzk4IDI2LjY4OTkgMjQuODUxOEMyNi41MjIgMjQuNDYzNyAyNi4yODEyIDI0LjExMzMgMjUuOTgxMiAyMy44MjA2QzI1LjY4MTIgMjMuNTI3OSAyNS4zMjggMjMuMjk4NyAyNC45NDE1IDIzLjE0NTlMMjQuOTM1OCAyMy4xNDIzWiIgZmlsbD0id2hpdGUiLz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzkyNl8xMDc0MyI+PHJlY3Qgd2lkdGg9IjMzIiBoZWlnaHQ9IjE0IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyAxNy41NTA0KSIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==" alt ="error"/>
          
          <Box h={"100%"}>
          <Heading fontSize={"24px"}  color={"#ffcc00"}>Save At The Pump</Heading>
            <Text fontSize={"16px"} color={"#f4f4f4"}>Speed Perks Members can now save on gas at participating Shell station.</Text>
          </Box>
          </Flex>
          <Divider h={"5px"} backgroundColor={"#ffcc00"} />
          </Box>
        </SimpleGrid>

{/* ********************************************************************************************************************************************* */}

   <Image marginTop={"20px"} marginBottom={"20px"} src ={costumerFav} alt = "customer rivew"/>
   <SliderThree/>

{/* ******************************************************************************************************************************************* */}
      
      <Image marginTop={"30px"} src = {findMyStore}/>

  {/* ************************************************************************************************************************************** */}
      
      <div style={{ fontSize:"18px", color:"#000000", marginTop:"40px", lineHeight:"18.4px"}}
      
      >
        *Restrictions apply: See coupon and promotion offer details</div>
      </Box>

    

    
    </>
  );
}

export default Home;
