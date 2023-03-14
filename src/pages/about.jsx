import {
    Container, Card, CardContent, Divider,
    Collapse, Fab, Slide, Box
} from "@mui/material";
import { useState } from "react";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SocialIcon } from 'react-social-icons';
import useNavStore from "../store.js";

export default function About() {
    const [linkedIn, setLinkedIn] = useState(false);
    const [git, setGit] = useState(false);
    const [read, setRead] = useState(false);
    const [expand, setExpand] = useState(false);

    const about = useNavStore((state) => state.about);
    const setPage = useNavStore((state) => state.setPageVisited);

    const handleClear = () => {
        if (about < 1 && linkedIn && git && read) {
            setPage("about");
            console.log("About cleared");
        }
    }

    return (
        <Container sx={{ marginTop: "4em", width: "70%" }} >
            <Slide timeout={600} direction="right" in={true} >
                <Box>
                    <Collapse timeout={700} collapsedSize={120} in={expand}>
                        <Card elevation={24} className="bio" sx={{ bgcolor: "#00256B", padding: "1em", maxWidth: "100%", color: "#D30077", opacity: "0.9", textAlign: "center", fontSize: "18px", lineHeight: "1.5" }} >
                            {!(linkedIn && git && read) && about < 1 ?
                            <NewReleasesIcon className="new" fontSize="small" />
                            : ""}
                            <h1>
                                <SocialIcon onClickCapture={() => setLinkedIn(true)} onClick={handleClear} target="_blank" bgColor="#001C58" fgColor="#FE018E" style={{ marginRight: "0.5rem", opacity: "0.7" }} url='https://www.linkedin.com/in/rafael-lopez0827/' />
                                <SocialIcon onClickCapture={() => setGit(true)} onClick={handleClear} target="_blank" bgColor="#001C58" fgColor="#02B45D" style={{ marginRight: "1em", opacity: "0.7" }} url='https://github.com/imkewlhuh' />
                                Rafael Lopez
                                <Fab  onClickCapture={() => {setExpand(!expand); setRead(true)}} onClick={handleClear()} style={{ backgroundColor: "#001C58", color: "#FE018E", marginLeft: "3em", opacity: "0.7" }} size="small">
                                    {expand ?
                                        <KeyboardArrowUpIcon />
                                        : <KeyboardArrowDownIcon />}
                                </Fab>
                            </h1>
                            <br />
                            <Divider sx={{ bgcolor: "#02B45D", height: "1.5px" }} variant="middle" />
                            <CardContent>
                                Technology has always been a big part of my life.
                                I gravitated towards learning JavaScript as it’s
                                been around for such a long time, and the name was
                                recognizable. I hope to develop various creative
                                websites and projects in the near future. During this
                                journey, I also hope to inspire the new generation
                                of kids in my family and show that there are other
                                routes to take in life besides going straight to
                                college.
                            </CardContent>
                        </Card>
                    </Collapse>
                </Box>
            </Slide>
        </Container>
    )
}
<p></p>