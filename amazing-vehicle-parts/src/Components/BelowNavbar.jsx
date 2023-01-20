

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

const NewArray = ["Accessories","Motorcycle Covers & Wellness","Comfort Accessories","Window Tint","Bulk Hose","Belt Components","Coolant Air Bleeders","Oil Absorbent","Analyzers","Engine Computers","Brushes & Vacuums","Brake Band Components","Motor Oil","AC Lubricants","Repair","Engine Oil Treatment & Additives","Inline 2-Cycle Motor Oil","Signs","AC Flushes & Solvents","Welding Helmets","Tools and Shop Equipment","Suspension","Coil Spring Hardware","Steering, Gears & Pumps"];
const Dresses = ["Steering","Power Steering Coolers","Power Steering Adapters","Coil Spring Hardware","Miscellaneous Chassis Parts","Automatic Transmissions","Manual Transmissions","Automatic Transmission Components","Bearings & Bearing Kits","Brake Band Components","Actuator Cables & Valves","4-Wheel Drive (4WD) Hubs","Axle Beam Assemblies & Mounts","Axle Bearings","Air & Water Gauges","Amp Gauges","Fuel Gauges","Gauge Accessories","Meter Gauges","Starter Bushings","Coil Springs"];



export default function BelowNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex gap={10}>
            <OnhoverProp NewArray={NewArray} title={"New!"} />
            <OnhoverProp NewArray={Dresses} title={"Replacement Parts"} />
            <OnhoverProp NewArray={NewArray} title={"Performance Parts"} /> 
            <OnhoverProp NewArray={Dresses} title={"Accessories"} /> 
            <OnhoverProp NewArray={NewArray} title={"Oil & Fluids"} />
            <OnhoverProp NewArray={Dresses} title={"Special Offers"} />
            <OnhoverProp NewArray={NewArray} title={"Orderd Lookup"} />
            {/* <OnhoverProp NewArray={Dresses} title={"Home and Furniture"} /> */}
            {/* <OnhoverProp NewArray={NewArray} title={"Beauty Wellness"} /> */}
          </Flex>  
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                 
                </MenuButton>
               
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}