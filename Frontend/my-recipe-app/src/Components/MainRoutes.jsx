import { Routes, Route } from "react-router-dom";
import RecipeSearch from "../Pages/Recepe";
import Wishlist from "../Pages/Wishlist";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/all" element={
            // <PrivateRoute>
                <RecipeSearch />
            // </PrivateRoute>
        } />
            <Route path="/wish" element={
            // <PrivateRoute>
                <Wishlist />
            // </PrivateRoute>
        } />
        </Routes>
    )
}


export default MainRoutes;