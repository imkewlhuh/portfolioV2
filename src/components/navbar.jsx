import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import useNavStore from "../store.js";

function NavBar() {
    const play = useNavStore((state) => state.play);
    const about = useNavStore((state) => state.about);
    const skills = useNavStore((state) => state.skills);
    const projects = useNavStore((state) => state.projects);
    const pass = useNavStore((state) => state.pass);

    return (
        <Box className="header">
            <Box className="navbar">
                <NavLink style={{ textDecoration: "none" }} to={"play"}>
                    {({ isActive }) => (
                        <Box className="navbutton" bgcolor={isActive ? "#FE018E" : "#00256B"} color={isActive ? "#00256B" : "#FE018E"}>
                            Play
                            { !(play === 1) ?
                                <NewReleasesIcon className="new" fontSize="inherit" />
                            : ""}
                        </Box>
                    )
                    }
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"about"}>
                    {({ isActive }) => (
                        <Box className="navbutton" bgcolor={isActive ? "#FE018E" : "#00256B"} color={isActive ? "#00256B" : "#FE018E"}>
                            About
                            { !(about === 1) ?
                                <NewReleasesIcon className="new" fontSize="inherit" />
                            : ""}                        
                        </Box>
                    )
                    }
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"skills"}>
                    {({ isActive }) => (
                        <Box className="navbutton" bgcolor={isActive ? "#FE018E" : "#00256B"} color={isActive ? "#00256B" : "#FE018E"}>
                            Skills
                            { !(skills === 1) ?
                                <NewReleasesIcon className="new" fontSize="inherit" />
                            : ""}                        
                        </Box>
                    )
                    }
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"projects"}>
                    {({ isActive }) => (
                        <Box className="navbutton" bgcolor={isActive ? "#FE018E" : "#00256B"} color={isActive ? "#00256B" : "#FE018E"}>
                            Projects
                            { !(projects === 1) ?
                                <NewReleasesIcon className="new" fontSize="inherit" />
                            : ""}                        
                        </Box>
                    )
                    }
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"battlepass"}>
                    {({ isActive }) => (
                        <Box className="navbutton" bgcolor={isActive ? "#FE018E" : "#00256B"} color={isActive ? "#00256B" : "#FE018E"}>
                            Battle Pass
                            { !(pass === 1) ?
                                <NewReleasesIcon className="new" fontSize="inherit" />
                            : ""}                        
                        </Box>
                    )
                    }
                </NavLink>
            </Box>
        </Box>
    )
};

export default NavBar;