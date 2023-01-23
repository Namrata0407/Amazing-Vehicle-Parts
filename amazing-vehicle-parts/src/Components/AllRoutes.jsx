import {Routes,Route} from "react-router-dom";
import CartPageDataBlue from "../Pages/CartPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import SingleProductPage from "../Pages/SingleProductPage";
import PrivateRoute from "./PrivateRoutes";

function AllRoutes(){

    return(
        <Routes>
         <Route path="/" element={<Home/>} />;
         <Route path="/login" element={<Login/>} />;
         <Route path="/products" element={<Products/>} />;
         <Route path="/products/:id" element={<SingleProductPage/>} />;
         <Route  path="/cart" element={
            <PrivateRoute>
              <CartPageDataBlue/>
            </PrivateRoute>
        }/>
        </Routes>
    )
}

export default AllRoutes;