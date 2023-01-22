

import React from "react";
import {
  Flex,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Button,
  useDisclosure,
  Link,
  Grid,
  Text
} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";

export default function OnhoverProp({NewArray,title}) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div  className="App">
      <Flex align="center" justifyContent="center" >
        <Menu isOpen={isOpen}>
          <MenuButton
            as={Link}
            variant="solid"
            colorScheme="teal"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
           <Text fontSize={16} color={title === "Special Offers" ? "#cc0033" : null } 
           fontWeight={title === "Special Offers" ? "bold" : null }
           >{title}</Text>
          </MenuButton>
          <MenuList position={"relative"} w={"600px"} zIndex={9} onMouseEnter={onOpen} onMouseLeave={onClose}>
          <Grid templateColumns='repeat(3, 1fr)'>
            {NewArray?.map((el,i) => (
                <RouterLink to="/products">
                  <MenuItem key={i}>{el}</MenuItem>
                </RouterLink>
            ))}
             </Grid>
           
          </MenuList>
        </Menu>
      </Flex>
    </div>
  );
}