import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text
  } from '@chakra-ui/react';
  import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom";

  function ItemPlaced() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <button onClick={onOpen}  style={{backgroundColor: "#54b4d3",color: "white", lineHeight: "22.4px",padding: "12px",borderRadius:"6px"}}>Proceed to CheckOut</button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent bg={"#c6f5d4"} >
            <ModalHeader>
            <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
   Order Successfull  🎉
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for order your product. Your product will placed to you soon.
  </AlertDescription>
</Alert>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
            
            </ModalBody>
            <ModalFooter>
              <RouterLink to={"/"}>
              <button style={{backgroundColor:"#2d797b",color:"white",height:"40px", width:"60px", borderRadius:"5px"}} onClick={onClose}>Ok</button>
              </RouterLink>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ItemPlaced;