import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar.jsx";

function Layout() {

    return (
        <Box className="layout">
            <NavBar />
            <Outlet />
        </Box>
    )
};

export default Layout;