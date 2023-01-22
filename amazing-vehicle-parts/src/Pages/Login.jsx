
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Link,
    Stack,
    Checkbox,
    Divider,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
    MdPassword
} from 'react-icons/md';
import { BsGithub, BsDiscord } from 'react-icons/bs';
import { FaKey } from "react-icons/fa";
import { useContext } from 'react';
import { useState } from 'react';
// import { AuthContext } from '../Contexts/AuthCotext';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../Contexts/AuthContext';

export default function Login() {
    // const {authState,loginUser,logoutUser} = useContext(AuthContext);
    const {authState,loginUser,logoutUser} =useContext(AuthContext)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [dis,setDis] = useState(false);
    
    
    const handleSubmit = async (e) => {
       e.preventDefault();
       setDis(true);
       try {
        const res = await fetch(`https://reqres.in/api/login`,{
              method:"POST",
              headers: {
                "Content-Type" : "application/json"
              },
              body: JSON.stringify({email,password})
        });
    
        const data = await res.json();
        if(data.token){
          loginUser(data.token);
        // console.log(data.token);
        }
    
       } catch (error) {
        console.log(error);
       }
    }

    // console.log(email,password);

    if(authState.isAuth === true){
        return <Navigate to="/products" />;
    }

    return (
        <>
      <Divider h={"2px"} backgroundColor={"#ffcc00"} />

<Container bg="white" maxW="full" mt={0} centerContent overflow="hidden">
           
           <Flex>
               <Box
                   bg="#FFCC00"
                   // color="#626669"
                   borderRadius="lg"
                   m={{ sm: 4, md: 16, lg: 10 }}
                   p={{ sm: 5, md: 5, lg: 16 }}>
                   <Box p={4}>
                       <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                           <WrapItem>
                               <Box>
                                   <Heading>Login here</Heading>
                                   <Text mt={{ sm: 3, md: 3, lg: 5 }} color="black">
                                       to enjoy all of our cool <Link color={"black"}>features</Link> 🎉
                                   </Text>
                                   <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                       <VStack pl={0} spacing={3} alignItems="flex-start">
                                           <Button
                                               size="md"
                                               height="48px"
                                               width="200px"
                                               variant="ghost"
                                               color="#4f4f4f"
                                               _hover={{ border: '2px solid #1C6FEB' }}
                                               leftIcon={<MdPhone color="#308705" size="20px" />}>
                                               +91-988888888
                                           </Button>
                                           <Button
                                               size="md"
                                               height="48px"
                                               width="200px"
                                               variant="ghost"
                                               color="#4f4f4f"
                                               _hover={{ border: '2px solid #1C6FEB' }}
                                               leftIcon={<MdEmail color="#1f80e0" size="20px" />}>
                                               hello@abc.com
                                           </Button>
                                           <Button
                                               size="md"
                                               height="48px"
                                               width="200px"
                                               variant="ghost"
                                               color="#4f4f4f"
                                               _hover={{ border: '2px solid #1C6FEB' }}
                                               leftIcon={<MdLocationOn color="#dd233c" size="20px" />}>
                                               Karnavati, India
                                           </Button>
                                       </VStack>
                                   </Box>
                                   <HStack
                                       mt={{ lg: 10, md: 10 }}
                                       spacing={5}
                                       px={5}
                                       alignItems="flex-start">
                                       <IconButton
                                           aria-label="facebook"
                                           variant="ghost"
                                           size="lg"
                                           isRound={true}
                                           _hover={{ bg: '#0D74FF' }}
                                           icon={<MdFacebook color='#1354f7' size="28px" />}
                                       />
                                       <IconButton
                                           aria-label="github"
                                           variant="ghost"
                                           size="lg"
                                           isRound={true}
                                           _hover={{ bg: '#0D74FF' }}
                                           icon={<BsGithub color='black' size="28px" />}
                                       />
                                       <IconButton
                                           aria-label="discord"
                                           variant="ghost"
                                           size="lg"
                                           isRound={true}
                                           _hover={{ bg: '#0D74FF' }}
                                           icon={<BsDiscord color='#363b35' size="28px" />}
                                       />
                                   </HStack>
                               </Box>
                           </WrapItem>
                           <WrapItem>
                               <Box bg="white" borderRadius="lg">
                                   <Box m={8} color="#0B0E3F">
                                       <VStack spacing={5}>

                                           <FormControl id="name">
                                               <FormLabel>Email</FormLabel>
                                               <InputGroup borderColor="#E0E1E7">
                                                   <InputLeftElement
                                                       pointerEvents="none"
                                                       children={<MdOutlineEmail color="gray.800" />}
                                                   />
                                                   <Input value={email} onChange={(e) => setEmail(e.target.value)} type="text" size="md" />
                                               </InputGroup>
                                           </FormControl>
                                           <FormControl id="name">
                                               <FormLabel>Password</FormLabel>
                                               <InputGroup borderColor="#E0E1E7">
                                                   <InputLeftElement
                                                       pointerEvents="none"
                                                       children={<FaKey color="gray.800" />}
                                                   />
                                                   <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" size="md" />
                                               </InputGroup>
                                           </FormControl>
                           
                                           <Stack
                                               direction={{ base: 'column', sm: 'row' }}
                                               align={'start'}
                                               justify={'space-between'}>
                                               <Checkbox>Remember me</Checkbox>
                                               <Link color={'blue.400'}>Forgot password?</Link>
                                           </Stack>
                                           <FormControl id="name" float="right">
                                               <Button
                                                   onClick={handleSubmit}
                                                   variant="solid"
                                                   bg="black"
                                                   color="#FFCC00"
                                                   _hover={{}}>
                                                   Submit
                                               </Button>
                                           </FormControl>
                                           <Stack
                                               direction={{ base: 'column', sm: 'row' }}
                                               align={'start'}
                                               justify={'space-between'}>
                                               <Text>Not a member?</Text>
                                               <Link color={'blue.400'}>Register</Link>
                                           </Stack>

                                       </VStack>
                                   </Box>
                               </Box>
                           </WrapItem>
                       </Wrap>
                   </Box>
               </Box>
           </Flex>
       </Container>

        </>
       
    );
}