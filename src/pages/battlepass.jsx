import NewReleasesIcon from '@mui/icons-material/NewReleases';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import {
    Container, Collapse, Paper, Box,
    Card, CardContent, Zoom, Fade
} from '@mui/material';
import PassReward from '../components/completedPass.jsx';
import useNavStore from '../store.js';

function Tiers(props) {
    return (
        <Box key={props.uniqueId} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", height: "100%", width: "100%" }}>
            <Fade timeout={1000} style={{ transitionDelay: 1200 }} in={true} mountOnEnter={true} unmountOnExit={true}>
                <Box sx={{ width: "170px", height: "80px", bgcolor: "#014B67" }}>
                    <Collapse timeout={1000} style={{ transitionDelay: 1000 }} orientation="horizontal" in={props.value === 1} mountOnEnter={true} unmountOnExit={true}>
                        <Box sx={{ width: "170px", height: "80px", bgcolor: "#01D058", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Zoom timeout={1000} style={{ transitionDelay: (2200 + props.delay) }} in={props.value === 1} mountOnEnter={true} unmountOnExit={true} >
                                <BeenhereIcon style={{ height: "70%", width: "70%" }} />
                            </Zoom>
                        </Box>
                    </Collapse>
                </Box>
            </Fade>
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

            <Fade timeout={1000} in={true}>
                <Paper elevation={24} className="battlePass" sx={{ borderRadius: "10px", padding: "2em", bgcolor: "#00256B", color: "#D30077", opacity: "0.9", display: "flex", flexDirection: "column", alignItems: "center", gap: "2em", fontSize: "18px" }} >
                    <Fade timeout={1000} style={{ transitionDelay: 900 }} in={true}>
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
                    </Fade>
                    <Fade timeout={1000} style={{ transitionDelay: 1200 }} in={true}>
                        <Box sx={{
                            width: "90%", height: "25vh", bgcolor: "#001C58", padding: "1em",
                            display: "flex", alignItems: "center", transform: "skew(145deg)"
                        }}>
                            {pages.map((page, i) => {
                                const delay = 500 * i;
                                return (
                                    <Tiers {...page} uniqueId={i + 300} delay={delay} />
                                )
                            })}
                        </Box>
                    </Fade>
                </Paper>
            </Fade>
        </Container>
    )
}