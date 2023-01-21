


import { Box, Button, Divider, Flex, Heading,Image,Text } from "@chakra-ui/react";
import styles from "../Styles/Payment.module.css";
import subodh from "../Images/subodh.png";
import payment from "../Images/payment.png";



function CartPageDataBlue(){
    return (
         
        <>
        
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
        <Text color={"#ffffff"} fontSize={"16px"} lineHeight={"25.6px"}>00.00</Text>
     </Flex>

     <Flex justifyContent={"space-between"}>
        <Text color={"#ffffff"} fontSize={"16px"} lineHeight={"25.6px"}>Shipping</Text>
        <Text color={"#ffffff"} fontSize={"16px"} lineHeight={"25.6px"}>00.00</Text>
     </Flex>

     <Flex justifyContent={"space-between"}>
        <Text color={"#ffffff"} fontSize={"16px"} lineHeight={"25.6px"}>Total(Incl. taxes)</Text>
        <Text color={"#ffffff"} fontSize={"16px"} lineHeight={"25.6px"}>00.00</Text>
     </Flex>

     </Box>


     <br />
     <Divider borderColor={"white"}/>
     <br />
    
           <Button bg={"#54b4d3"} color={"white"} lineHeight={"22.4px"}>Procedd To CheckOut</Button>

        </Box>

      
      </Box>

        </>
    )
}

export default CartPageDataBlue;