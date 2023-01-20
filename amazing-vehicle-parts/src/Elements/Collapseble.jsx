
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import {Button,Flex,Heading,Input,Text,Box,Divider,Checkbox} from "@chakra-ui/react";

function Collapseble({Filter,filterBy}) {
  const [height, setHeight] = useState(0);

  return (
    <div>
      <Flex padding={5}  onClick={() => setHeight(height === 0 ? "auto" : 0)} justifyContent={"space-around"} alignItems={"center"} >
      <Text fontSize={"20px"}>{filterBy}</Text>
      <Text 
        aria-expanded={height !== 0}
        aria-controls="example-panel"
        // onClick={() => setHeight(height === 0 ? "auto" : 0)}
      >
        {height === 0 ? "▼" : "▲"}
      </Text>
      </Flex>

      <AnimateHeight
        id="example-panel"
        duration={500}
        height={height} // see props documentation below
      >
        <Flex marginTop={"10px"} direction={"column"} justifyContent={"center"} alignItems={"start"} gap={5}>
            {Filter.map((el,i)=> (
               <Checkbox key={i} marginStart={"20%"}>{el}</Checkbox>
            ))}
        </Flex>
        
      </AnimateHeight>
      <Divider borderColor={"grey"}/>
    </div>
  );
}


  export default Collapseble;