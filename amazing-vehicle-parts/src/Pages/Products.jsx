import { Box, SimpleGrid,Select,Option,Button, GridItem, Image ,Flex,Text,Divider, Heading} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Collapseble from "../Elements/Collapseble";

// import img1 from "../Images/imgp1.png";
// import img2 from "../Images/imgp2.png";
// import img3 from "../Images/imgp3.png";
// import img4 from "../Images/imgp4.png";
// import img5 from "../Images/imgp5.png";
// import img6 from "../Images/imgp6.png";
import { FaStar } from "react-icons/fa";

const FilterPrice = ["₹25 - ₹50","₹50 - ₹100","₹100 - ₹200","₹200 - ₹500","More than ₹500"]
const FilterSizeType = ["STANDARD", "PLUS","PETITE","REGULAR"];
const FilterBySizeNo = ["XXS","XS","XS/S","S","M","M/L","L","XL","XXL","XS P","S P","M P","L P","XL P"]; 
const FilterByBrand = ["Allina","Amadi","Amsale","AMUR","ASTR The Lable","Atsu","Audrey Adele","Aureta","Baobab","Beach Riot"]
const FilteByColor = ["Black","White","Blue","Green","Assorted","Pink","beige","Red","Purple","Orange","Brown","Grey","Yellow","Gold","Silver","Mint"];


const getData = async (order) => {

    const res = await fetch(`https://json-server-m3p9.onrender.com/product?_sort=price&_order=${order}&_limit=9&page=1`);
    const data = await res.json();

    return data;

    // console.log(data);
}

// getData();

function Products() {
    const [data,setData] = useState([]);
    const [order,setOrder] = useState("");

    const fetchedData = async (order) => {
        const result = await getData(order);
        setData(result);
    }

   useEffect(() => {
    fetchedData(order);
   },[order]);

   const handleOrder = (e) => {
     setOrder(e.target.value);
   }

//    console.log(data);

    return (
        <>
         <Divider h={"2px"} backgroundColor={"#ffcc00"} />
            <Box marginTop={"15px"} marginLeft={"20px"} marginRight={"20px"} textAlign={"start"}>
                <Text fontSize={"14px"} color={"#666666"} lineHeight={"22px"}>Home  /  Battery, Electrical & Wiring  /  Electrical Connectors & Sockets  /  Electrical Tape, Ties & Clamps</Text>
                <Heading fontSize={"24px"} lineHeight={"32px"}>Electrical Tape, Ties & Clamps</Heading>
            </Box>
    {/* <br /> */}
    <Divider h={"2px"} backgroundColor={"#ffcc00"} marginTop={"10px"}/>
            <Box height={"auto"} marginTop={"20px"} marginLeft={"20px"} marginRight={"20px"}>
              <Flex>
{/* ************** Collaseble ****************************** *                 */}
               <Box w={"24%"} height={"auto"}>
                <Text fontSize={"20px"} textAlign={"start"}>Filter by:</Text>
                <br/>
                <Divider borderColor={"gray"}/>

                <Collapseble Filter={FilterPrice} filterBy={"Price"}/>
                <Collapseble Filter={FilterSizeType} filterBy={"Size Type"}/>
                <Collapseble Filter={FilterBySizeNo} filterBy={"Size"}/>
                <Collapseble Filter={FilterByBrand} filterBy={"Brand"}/>
                <Collapseble Filter={FilteByColor} filterBy={"Color"}/>
               </Box>
{/* ************** Products ****************************** */}
                <Box w={"76%"} height={"auto"} >
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontFamily={""} fontSize={"30px"} color={"#26262c"}>Dresses</Text>
                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                     Sort:  
                    <Select value={order} onChange={handleOrder}  width={"170px"}>
                        <option value={""} >Featured</option>
                        <option value={"asc"} >Price: Low to High</option>
                        <option value={"desc"}>Price: High to Low</option>
                    </Select>
                    </Flex>
                    
                  </Flex>
                  <SimpleGrid columns={[1,2,2,3]} gap={6} marginTop={"15px"} >
                  {data?.map((el) => (
                      <Box key={el.id} padding={"10px"} boxShadow={"2xl"} borderRadius={"10px"}
                      borderTopLeftRadius={"60px"}
                      >
                        <Image margin={"auto"} w={"70%"} h={"160px"} src={el.img} alt={"error"}/>
                        <Text fontSize={"20px"} fontFamily={"Times"} textAlign={"start"}>{el.title}</Text>
                        <Text fontSize={"20px"} fontFamily={"Times"} textAlign={"start"}>{"₹ "}{el.price}</Text>
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                          <Flex >
                            <Text color={"#ffcc00"}>★★★</Text>
                            <Text>★★</Text>
                          </Flex>
                         
                        <Button bg={"#ffcc00"} color="#1e1e1e">
                        Add to Cart
                        </Button>
                        </Flex>
                        
                      </Box>
                  ))}
                  </SimpleGrid>
                </Box>
              </Flex>
            </Box>
        </>
    )
}

export default Products;