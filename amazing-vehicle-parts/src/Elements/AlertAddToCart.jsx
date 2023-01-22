import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { AuthContext } from "../Contexts/AuthContext";
import { Link as RouterLink } from "react-router-dom";

function AlertAddButton({ singleProduct }) {
  const { authState } = useContext(AuthContext);
  const { cartData, addItem, removeItem } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();
  const position = ["top"];

  const confirmedFun = () => {
    addItem(singleProduct);

    onClose();
  };

  return (
    <>
      {/* <FiShoppingCart onClick={onOpen} bg={"#167a92"} h={"23px"} w={"23px"}  color="black"/> */}
      <Icon
        marginBottom={"10px"}
        as={FiShoppingCart}
        h={10}
        w={10}
        marginTop={"-30px"}
        onClick={onOpen}
        marginRight={"20px"}
        color="black"
      />
      {authState.isAuth === true ? (
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Add to Cart</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to Add the item to the Cart?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} colorScheme="red" onClick={onClose}>
                No
              </Button>
              <Button onClick={confirmedFun} colorScheme="green" ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Login to enjoy our services</ModalBody>
            <ModalFooter>
              <RouterLink to="/login">
                <Button bg={"#2d797b"} color={"white"} onClick={onClose}>
                  ok
                </Button>
              </RouterLink>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default AlertAddButton;
