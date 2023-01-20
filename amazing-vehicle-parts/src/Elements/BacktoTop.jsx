

import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Button,Text } from '@chakra-ui/react';
import styles from "../Styles/Btt.module.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position='fixed'
          bottom='50px'
          right={['16px', '50px']}
          zIndex={3}
          >
          <Button
            size={'sm'}
            
            bg={"black"}
            variant='solid'
            w={"50px"}
            h={"50px"}
            style={{borderRadius:"50%"}}
            border="1px solid #FFCC02"
            >
               <Text fontSize={"27px"} color={"#FFCC02"}>↑</Text> 
          </Button>
        </Box>
      )}
    </>
  );
}