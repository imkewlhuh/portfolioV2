import NewReleasesIcon from '@mui/icons-material/NewReleases';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import {
    Container, Collapse, Paper, Box,
    Card, CardContent, Zoom, Fade
} from '@mui/material';
import PassReward from '../components/completedPass.jsx';
import useNavStore from '../store.js';

function Tiers(props) {
    let show = false;
    if (props.value === 1) {
        show = true;
    } 
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", height: "100%", width: "100%" }}>
                <Box sx={{ width: "90%", height: "80px", bgcolor: "#014B67" }}>
                    <Collapse timeout={1000}  in={show} mountOnEnter unmountOnExit>
                        <Box sx={{ width: "170px", height: "80px", bgcolor: "#01D058", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Zoom timeout={1000} style={{ transitionDelay: (1000 + props.delay) }} in={show} mountOnEnter unmountOnExit >
                                <BeenhereIcon style={{ height: "70%", width: "70%" }} />
                            </Zoom>
                        </Box>
                    </Collapse>
                </Box>
            <h5>{props.name}</h5>
        </Box>
    )
}

export default function BattlePass() {
    const play = useNavStore((state) => state.play);
    const about = useNavStore((state) => state.about);
    const skills = useNavStore((state) => state.skills);
    const projects = useNavStore((state) => state.projects);
    const pass = useNavStore((state) => state.pass);

    const setPage = useNavStore((state) => state.setPageVisited);

    if (pass < 1 && (play + about + skills + projects === 4)) {
        setPage("pass");
        console.log("Battle pass completed!");
    }

    const pages = [
        { name: "play", value: play },
        { name: "about", value: about },
        { name: "skills", value: skills },
        { name: "projects", value: projects },
        { name: "pass", value: pass }
    ]

    return (
        <Container sx={{ marginTop: "4em" }}>
            <PassReward pass={pass} />

                <Paper elevation={24} className="battlePass" sx={{ borderRadius: "10px", padding: "2em", bgcolor: "#00256B", color: "#D30077", opacity: "0.9", display: "flex", flexDirection: "column", alignItems: "center", gap: "2em", fontSize: "18px" }} >
                        <Card elevation={18} sx={{
                            bgcolor: "#001C58", color: "#FE018E", display: "flex",
                            flexDirection: "column", alignItems: "center", borderRadius: "5px",
                            padding: "1rem", width: "80%", textAlign: "center"
                        }} >
                            <h2>
                                Season 1 BattlePass
                            </h2>
                            <CardContent>
                                Progress the battle pass by viewing each page.<br />
                                Hover or click each item to clear {<NewReleasesIcon fontSize='small' />} and earn XP.
                            </CardContent>
                        </Card>
                        <Box sx={{
                            width: "90%", height: "25vh", bgcolor: "#001C58", padding: "1em",
                            display: "flex", alignItems: "center", transform: "skew(145deg)"
                        }}>
                            {pages.map((page, i) => {
                                const delay = 500 * i;
                                return (
                                    <Box width={"100%"} key={page.name}>
                                        <Tiers {...page} delay={delay} />
                                    </Box>
                                )
                            })}
                        </Box>
                </Paper>
        </Container>
    )
}