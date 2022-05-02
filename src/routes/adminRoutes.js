import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewUser from "../pages/adminPages/addNewUser";
import AdminDashboard from "../pages/adminPages/adminDashboard";
import UpdateUser from "../pages/adminPages/updateUser";


const AdminRoutes = () => {
    return (
        <>
            <Routes>

            <Route path="/" element={<AdminDashboard />} ></Route>
            <Route path="/create" element={<AddNewUser />} ></Route>
            <Route path="/update" element={<UpdateUser />} ></Route>
            </Routes>
        </>
    );
}

export default AdminRoutes;
