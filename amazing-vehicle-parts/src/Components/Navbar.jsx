

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Input,
  ButtonGroup,
  Divider,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon ,MoonIcon,SunIcon} from '@chakra-ui/icons';
// import { NavLink } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import source from "../Images/img1.png";
import source2 from "../Images/img2.png";

import {
    MDBContainer,
    MDBNavbar,
    MDBBtn,
    MDBInputGroup
  } from 'mdb-react-ui-kit';
import BelowNavbar from './BelowNavbar';

const Links = ['Add a Vehicle'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    fontSize={"20"}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    <Image src={source2} alt = "error"/>
   
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image w={"200px"} h={'60px'} marginLeft={'-15px'} marginTop={'-2px'} src={source} alt={"error"} />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>
                  <Flex justifyContent={"center"} alignItems={"center"}>
                  <Text fontSize={"50px"}>🚘</Text> {` ${link}`}
                  </Flex>
                
                  </NavLink>
              ))} */}
              <Flex justifyContent={"center"} alignItems={"center"}>
                  <Text fontSize={"50px"} marginLeft={"-10px"}>🚘</Text> 
                  <Button>Add a Vehicle</Button>
                  </Flex>
            </HStack>
          </HStack>
         
           <Flex w={"50%"}>
           <input placeholder='Search Here' style={{width: "100%",border:"1px solid grey"}} _focus={"none"} borderRadius={"none"} />
           <Button border={"1px solid blue"} borderRadius={"none"}>Search</Button>
           </Flex>
             <Button>Choose a Store  ⯆</Button>
           <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
         <RouterLink to="/cart">
         <Image h={"350px"} w={"35px"} size={'sm'} src={"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1sYWJlbD0iTXkgU2hvcHBpbmcgQ2FydCIgcm9sZT0iaW1nIiBmb2N1c2FibGU9ImZhbHNlIj48cGF0aCBkPSJNMTQuNzggNi40OVY1LjE4NUMxNC43OCAyLjYwMSAxMi42MzcuNSAxMCAuNVM1LjIyIDIuNjAxIDUuMjIgNS4xODR2MS4zMDdIMHY3Ljk3M0MwIDE3LjI0IDIuMzU3IDE5LjUgNS4yNTQgMTkuNWg5LjQ5M2MyLjg5NyAwIDUuMjUzLTIuMjYgNS4yNTMtNS4wMzZWNi40OXpNNi4yMiA1LjE4NUM2LjIyIDMuMTUzIDcuOTE0IDEuNSAxMCAxLjVzMy43OCAxLjY1MyAzLjc4IDMuNjg0djEuMzA3SDYuMjJ6TTE5IDE0LjQ2NGMwIDIuMjI1LTEuOTA4IDQuMDM2LTQuMjUzIDQuMDM2SDUuMjU0QzIuOTA4IDE4LjUgMSAxNi42OSAxIDE0LjQ2NFY3LjQ5aDQuMjJ2Mi40MjdoMVY3LjQ5MWg3LjU2djIuNDI3aDFWNy40OTFIMTl6Ii8+PC9zdmc+"}  alt={"error"}/>
         </RouterLink>
        
         
          <Flex  alignItems={'center'}>
            <Menu  > 
                {/* <Box> */}
             {/* </Box> */}

              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList >
              <MenuItem>
                   <RouterLink to="/login">

                       Login
                    
                    </RouterLink>
             </MenuItem>
                <MenuItem>LogOut</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      {/* <Box p={4}> */}
        {/* Main Content Here */}
        <BelowNavbar/>
    {/* </Box> */}
    </>
  );
}