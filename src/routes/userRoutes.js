import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./adminRoutes";


const UserRoutes = () => {
    return (
        <>
            <Routes>

            <Route path="/admin/*" element={<AdminRoutes />} ></Route>

            </Routes>
        </>
    );
}

export default UserRoutes;