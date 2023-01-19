import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import SingleProductPage from "../Pages/SingleProductPage";

function AllRoutes(){

    return(
        <Routes>
         <Route path="/" element={<Home/>} />;
         <Route path="/login" element={<Login/>} />;
         <Route path="/products" element={<Products/>} />;
         <Route path="/products/:id" element={<SingleProductPage/>} />;
        </Routes>
    )
}

export default AllRoutes;