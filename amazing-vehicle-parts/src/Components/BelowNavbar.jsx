

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
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
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon,ChevronDownIcon } from '@chakra-ui/icons';
import {
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
  } from '@chakra-ui/react'
import OnhoverProp from './Onhover';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const NewArray = ["Accessories","Beauty & Wellness","Clothing","Dresses","Home & Feature","Jewelry","Petites","Plus","Shoes","bhlndWeddings","The Valentine's Day Shop","New Today: Clothing & Accessories","The Must-Haves","House & Hackney","Accessories","Beauty & Wellness","Clothing","Dresses","Home & Feature","Jewelry","Petites","Plus","Shoes","bhlndWeddings","The Valentine's Day Shop"];
const Dresses = ["Shop All Dresses","New!","Top Rated Dresses","Occession & Party Dress","Loungr & Casual Dresses","Formal Dresses","Maxi Dress","Mini & Tunic Dress","Middi Dress","Petie Dresses","Plus Dresses","Wedding Guest Dresses","BHLND Weddings","Shop All Dresses","New!","Top Rated Dresses","Occession & Party Dress","Loungr & Casual Dresses","Formal Dresses","Maxi Dress","Mini & Tunic Dress","Middi Dress"];

// const MenuItems = () => {
//     return(
//         <Menu>
//         <MenuButton as={Link} rightIcon={<ChevronDownIcon />}>
//           Actions
//         </MenuButton>
//         <MenuList>
//             <Flex>
//                 <Box>
//                 <MenuItem>Download</MenuItem>
//           <MenuItem>Create a Copy</MenuItem>
//           <MenuItem>Mark as Draft</MenuItem>
//           <MenuItem>Delete</MenuItem>
//           <MenuItem>Attend a Workshop</MenuItem>
//                 </Box>
//                 <Box>
//                 <MenuItem>Download</MenuItem>
//           <MenuItem>Create a Copy</MenuItem>
//           <MenuItem>Mark as Draft</MenuItem>
//           <MenuItem>Delete</MenuItem>
//           <MenuItem>Attend a Workshop</MenuItem>
//                 </Box>
//             </Flex>
//         </MenuList>
//       </Menu>
//     )
// }

export default function BelowNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex gap={10}>
            <OnhoverProp NewArray={NewArray} title={"New!"} />
            <OnhoverProp NewArray={Dresses} title={"Dresses"} />
            <OnhoverProp NewArray={NewArray} title={"Clothing"} /> 
            <OnhoverProp NewArray={Dresses} title={"Shoes"} /> 
            <OnhoverProp NewArray={NewArray} title={"Accessories"} />
            <OnhoverProp NewArray={Dresses} title={"Gifts"} />
            <OnhoverProp NewArray={NewArray} title={"BHLDN Weddings"} />
            <OnhoverProp NewArray={Dresses} title={"Home and Furniture"} />
            <OnhoverProp NewArray={NewArray} title={"Beauty Wellness"} />
          </Flex>  
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  {/* <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  /> */}
                </MenuButton>
                {/* <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList> */}
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}