

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

export default function OnhoverProp({NewArray,title}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="App">
      <Flex align="center" justifyContent="center" >
        <Menu isOpen={isOpen}>
          <MenuButton
            as={Link}
            variant="solid"
            colorScheme="teal"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
           <Text fontSize={20}>{title}</Text>
          </MenuButton>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <Grid  templateColumns='repeat(3, 1fr)'>
            {NewArray?.map((el,i) => (
                <MenuItem key={i}>{el}</MenuItem>
            ))}
             </Grid>
            {/* <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem> */}
          </MenuList>
        </Menu>
      </Flex>
    </div>
  );
}