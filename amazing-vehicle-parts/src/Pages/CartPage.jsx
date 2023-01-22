


import { Box, Button, Divider, Flex, Heading,Image,Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { MdFavorite,MdDelete } from "react-icons/md";
import { useState } from "react";
import styles from "../Styles/Payment.module.css";
import subodh from "../Images/subodh.png";
import payment from "../Images/payment.png";
import ItemPlaced from "../Elements/ItemPlaced";
import SliderTwo from "../Components/SliderTwo";
import SliderThree from "../Components/SliderThree";


function CartPageDataBlue(){
   const {cartData,addItem,removeItem,increaseQuantity,decreaseQuantity,total} = useContext(CartContext);
    const [quantity,setQuantity] = useState(1);

    return (
         
        <>
        
        <Flex justifyContent={"center"} margin={"auto"} marginLeft={"20px"} height={"auto"} marginRight={"20px"} padding={"50px"} w={"98%"} >
            <Flex  height={"auto"} marginRight={"20px"}  padding={"50px"} w={"1400px"}>
              <Box w={"60%"}  boxShadow={"2xl"} borderRadius={"20px"}>
               <Flex justifyContent={"space-between"}>
               <Heading color={"#606060"} fontSize={"25px"} marginLeft={"30px"} marginTop={"23px"} textAlign={"start"}>Cart - {cartData.length} items</Heading>
               <Heading color={"#606060"} marginRight={"50px"} fontSize={"25px"} marginLeft={"30px"} marginTop={"23px"} >{`Total: ₹ ${total}`}</Heading>
               </Flex>
               <Divider  marginTop={"30px"} h={"1px"} bg={"gray"} borderColor={"gray"}/>
               {cartData.length === 0 ? <Heading marginTop={"80px"}>Your cart is empty</Heading> : cartData?.map((el) => (
                <Flex key={el.id} justifyContent={"space-between"} alignItems={"center"} direction={"column"} padding="10px" >
                    <Flex w={"100%"} key={el.id} gap={10} justifyContent={"space-around"}>
                   <Image w={"120px"} h={"120px"} src={el.img}  alt={"error"}/>
                   <Flex direction={"column"} textAlign={"start"} gap={4}>
                    <Heading color={"#606060"} fontSize={"20px"} w={"200px"}>
                        {el.name}
                    </Heading>
                    <Text fontSize={"16px"}>{`Price: ₹ ${el.price}`}</Text>
                     <Flex alignItems={"center"} justifyContent={"centre"} gap={6}>
                        <Box bg={"#376bc0"} padding={"10px"} borderRadius={"5px"}>
                            <MdDelete onClick={() => removeItem(el.id)} color="white"/>
                        </Box>
                        <Box bg={"#dc4b64"} padding={"10px"} borderRadius={"5px"}>
                        < MdFavorite color="white" />
                        </Box>
                     </Flex>
                     
                   </Flex>
                   <Flex direction={"column"}>
                        <Flex  marginTop={"30px"}> 
                            <button disabled={el.quantity === 1 || el.quantity === undefined} style={{backgroundColor: "#376bc0",color:"white",height:"35px",width:"35px",borderRadius:"5px"}}  onClick={() => setQuantity(() => decreaseQuantity(el.id))}>
                                -
                            </button>
                            <button  style={{backgroundColor: "white",height:"30px",width:"30px"}}>
                                {el.quantity ? el.quantity : 1}
                            </button>
                            <button style={{backgroundColor: "#376bc0",color:"white",height:"35px",width:"35px",borderRadius:"5px"}} onClick={() => setQuantity(() =>increaseQuantity(el.id))}>
                                +
                            </button>
                        </Flex>
                        <Text marginTop={"15px"} fontSize={"16px"}>{`Price : ${el.quantity ? el.price * el?.quantity : el.price}`}</Text>
                     </Flex>
                </Flex>
                <Divider marginTop={"10px"} borderColor={"gray"} width={"97%"} />
                </Flex>
               ))}
               
              </Box>
  {/* ******************{   form    }****************************************             */}
              <Box w={"40%"} >
              <Box  bg={"#3b71ca"} h={"580px"} w={"370px"} margin={"auto"} borderRadius={"10px"}>


<Box marginLeft={"15px"} marginRight={"15px"}  border={"1px solid #3B71CA"}  >

<Box>
    <Flex justifyContent={"space-between"} marginTop={"20px"} textAlign={"start"}>
        <Heading marginTop={"10px"} fontSize={"20px"} lineHeight={"24px"} color={"#ffffff"}>Card Details</Heading>
        <Image marginTop={"-6px"} marginRight={"10px"} borderRadius={"50%"} bg={"#3b71ca"} src={subodh} alt="avatar" h={"60px"} w={"60px"}/>
    </Flex>
</Box>

 <Flex direction={"column"} textAlign={"start"}>
 <Text fontSize={"16px"} lineHeight={"25.6px"} color={"#ffffff"}>Cart Type</Text>
 <Image lineHeight={"32px"} h={"30px"} w={"190px"} src={payment} alt="error"/>
 </Flex>

<br />

<Box>
<Flex direction={"column"} w={"97%"}  gap={5} >
    <input  placeholder="Cardholder's Name" className={styles.inputBox} style={{border:"1px solid white", type:"text", lineHeight:"34.4px",
    borderRadius:"5px", backgroundColor:"#3B71CA", color:"white",padding:"4px"
 }} />
     <input  placeholder="Card Number" className={styles.inputBox} style={{border:"1px solid white", type:"text", lineHeight:"34.4px",
    borderRadius:"5px", backgroundColor:"#3B71CA", color:"white", padding:"4px"
 }} />
   
</Flex>
 
 <br />
 <Flex justifyContent={"space-between"}  >
 <input type="date" placeholder="Expiration" className={styles.inputBox} style={{border:"1px solid white", lineHeight:"34.4px",
    borderRadius:"5px", backgroundColor:"#3B71CA", color:"white", padding:"4px", width:"47%"
 }} />
     <input type="password" placeholder="Cvv" className={styles.inputBox} style={{border:"1px solid white", lineHeight:"34.4px",
    borderRadius:"5px", backgroundColor:"#3B71CA", color:"white", padding:"4px",width:"47%",marginRight:"9.5px"
 }} />
 </Flex>
</Box>

         <br />
<Divider borderColor={"white"}/>
<br />

<Box justifyContent={"space-between"}>
<Flex justifyContent={"space-between"}>
<Text color={"#ffffff"} fontSize={"16px"} lineHeight={"25.6px"}>Subtotal</Text>
<Text color={"#ffffff"} fontSize={"16px"} lineHeight={"25.6px"}>{`₹ ${total}`}</Text>
</Flex>

<Flex justifyContent={"space-between"}>
<Text color={"#ffffff"} fontSize={"16px"} lineHeight={"25.6px"}>Shipping</Text>
<Text color={"#ffffff"} fontSize={"16px"} lineHeight={"25.6px"}>₹ 55.00</Text>
</Flex>

<Flex justifyContent={"space-between"}>
<Text color={"#ffffff"} fontSize={"16px"} lineHeight={"25.6px"}>Total(Incl. taxes)</Text>
<Text color={"#ffffff"} fontSize={"16px"} lineHeight={"25.6px"}>{total !== 0 ? `₹ ${total + 55}` : `₹ 0.00` }</Text>
</Flex>

</Box>


<br />
<Divider borderColor={"white"}/>
<br />

   {/* <button  style={{backgroundColor: "#54b4d3",color: "white", lineHeight: "22.4px",padding: "12px",borderRadius:"6px"}}>Procedd To CheckOut</button> */}
   <ItemPlaced/>

</Box>


</Box>

              </Box>
            </Flex>

         </Flex>

         <Box>
          <Heading marginLeft={"20px"} textAlign={"start"} fontSize={"25px"}>You May Also Like</Heading>
         <br />
            <SliderThree/>
         </Box>
        </>
    )
}

export default CartPageDataBlue;