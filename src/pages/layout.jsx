import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar.jsx";
import { useEffect } from "react";

function Layout() {

    return (
        <Box className="layout">
            <NavBar />
            <Outlet />
        </Box>
    )
};

export default Layout;