import {
    Container, Paper, Box, List, ListItem,
    ListItemAvatar, Card, CardContent, Divider,
    Slide, Grow, Fade
} from "@mui/material";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useNavStore from "../store.js";
import { useState } from "react";

export default function Home() {
    const [challenge, setChallenge] = useState(false);
    const [title, setTitle] = useState(false);

    const play = useNavStore((state) => state.play);
    const setPage = useNavStore((state) => state.setPageVisited);

    const handleClear = () => {
        if (play < 1 && challenge && title) {
            setPage("play");
            console.log("Play cleared");
        }
    }

    return (
        <Container className="home" sx={{ marginTop: "3em", display: "flex", justifyContent: "space-around", alignItems: "center" }} >
            <Grow in="true" timeout={700} style={{ transitionDelay: 1600 }} >
                <Card onMouseEnter={() => setChallenge(true)} onMouseLeave={handleClear} elevation={24} className="challenges" sx={{ maxWidth: "40%", bgcolor: "#00256B", color: "#D30077", opacity: "0.9", textAlign: "center", fontSize: "18px" }} >
                    {!challenge && play < 1 ?
                        <NewReleasesIcon className="new" fontSize="small" />
                        : ""}
                    <CardContent>
                        <Fade in="true" timeout={800} style={{ transitionDelay: 3000 }} >
                            <h1>Challenges</h1>
                        </Fade>
                        <br />
                        <Divider sx={{ bgcolor: "#02B45D", height: "1.5px" }} />
                        <List sx={{ minHeight: "50%" }} >
                            <Fade in="true" timeout={800} style={{ transitionDelay: 4000 }} >
                                <ListItem alignItems="flex-start" >
                                    <ListItemAvatar>
                                        <CheckCircleOutlineIcon />
                                    </ListItemAvatar>
                                    Explore the sections to complete the Battle Pass!
                                </ListItem>
                            </Fade>
                            <br />
                            <Fade in="true" timeout={800} style={{ transitionDelay: 4400 }} >
                                <Divider sx={{ bgcolor: "#02B45D", height: "1.5px" }} variant="middle" />
                            </Fade>
                            <br />
                            <Fade in="true" timeout={800} style={{ transitionDelay: 4600 }} >
                                <ListItem alignItems="flex-start" >
                                    <ListItemAvatar>
                                        <CheckCircleOutlineIcon />
                                    </ListItemAvatar>
                                    Earn XP by viewing each item on every page and progress the Battle Pass.
                                </ListItem>
                            </Fade>
                        </List>
                    </CardContent>
                </Card>
            </Grow>
            <Grow in="true" timeout={700} >
                <div style={{ width: "40%" }} onMouseEnter={() => setTitle(true)} onMouseLeave={handleClear} >
                    <Paper elevation={24} className="jobTitle" sx={{ maxWidth: "100%", bgcolor: "#00256B", color: "#D30077", opacity: "0.9", textAlign: "center", fontSize: "18px" }} >
                        {!title && play < 1 ?
                            <NewReleasesIcon className="new" fontSize="small" />
                            : ""}
                        <br />
                        <Grow style={{ transitionDelay: 700, transformOrigin: "50% 0 0" }} timeout={700} in="true" >
                            <h1>Fullstack Developer</h1>
                        </Grow>
                        <br />
                        <Divider sx={{ bgcolor: "#02B45D", height: "1.5px" }} variant="middle" />
                        <br />
                        <Grow style={{ transitionDelay: 1400, transformOrigin: "50% 100% 0" }} timeout={700} in="true" >
                            <h1>Software Engineer</h1>
                        </Grow>
                        <br />
                    </Paper>
                </div>
            </Grow>
        </Container>
    )
}