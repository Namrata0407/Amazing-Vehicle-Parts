
import { useState } from "react";
import { Children, createContext, useContext } from "react";
// import { AuthContext } from "./AuthCotext";
import { useToast,useDisclosure } from '@chakra-ui/react'
import { useEffect } from "react";


export const CartContext = createContext();

const CalculateTotal = (data) => {
   let totalPrice = 0;

   for(let i=0; i<data.length; i++){
       totalPrice += data[i].quantity* data[i].price;
   }

   return totalPrice;
}


const CartContextProvider = ({children}) =>{
    const [cartData,setCartData] = useState([]);
    const [total,setTotal] = useState(0);
    const [searchData,setSearchData] = useState([]);
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast()
    const position = [
    'top',
    ]

    const addItem = (val) => {

        setCartData([...cartData,{...val,["quantity"]: 1}]);
        toast({
            // title: `${"top"} toast`,
            position: "top",
            isClosable: true,
            status: 'success',
            title: 'Added Successfully ',
            description: "Item Added to your Cart",
          });
        // onClose();
    }

    const removeItem = (val) => {
       const deletedData = cartData.filter((el) => {
          return val !== el.id ;
       });
       setCartData(deletedData);
    }

    const increaseQuantity = (id) => {
      let updateData = cartData.map((el) => {
        return el.id === id ? {...el,["quantity"]: el.quantity ? el.quantity +1  : 2 } : el ;
      });
      setCartData(updateData);
    }

    const decreaseQuantity = (id) => {
        let updateData = cartData.map((el) => {
          return el.id === id ? {...el,["quantity"]: el.quantity ? el.quantity - 1  : -1 } : el ;
        });
        setCartData(updateData);
      }

    useEffect(() => {
       const totalPrice = CalculateTotal(cartData);
       setTotal(totalPrice);
    },[cartData]);

    // console.log(cartData);
    // console.log(searchData);



  return (
    <CartContext.Provider value={{searchData,setSearchData,cartData,addItem,removeItem,increaseQuantity,decreaseQuantity,total}}>
        {children}
    </CartContext.Provider>
  )
} 

export default CartContextProvider;