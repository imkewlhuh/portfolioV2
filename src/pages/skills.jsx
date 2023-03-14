import {
    Container, Paper, Box, Zoom,
    Grid, Tooltip
} from "@mui/material";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { useState } from "react";
import useNavStore from "../store.js";

export default function Skills() {
    const [html, setHtml] = useState(false);
    const [css, setCss] = useState(false);
    const [js, setJs] = useState(false);
    const [react, setReact] = useState(false);
    const [node, setNode] = useState(false);
    const [express, setExpress] = useState(false);

    const skillsPage = useNavStore((state) => state.skills);
    const setPage = useNavStore((state) => state.setPageVisited);

    const handleClear = () => {
        if (skillsPage < 1 && html && css && js && react && node && express) {
            setPage("skills");
            console.log("Skills cleared");
        }
    }
    const skills = [
        { name: "HTML", level: 5, state: html, check: () => setHtml(true) },
        { name: "CSS", level: 5, state: css, check: () => setCss(true) },
        { name: "JavaScript", level: 5, state: js, check: () => setJs(true) },
        { name: "React", level: 4, state: react, check: () => setReact(true) },
        { name: "Node.js", level: 3, state: node, check: () => setNode(true) },
        { name: "Express", level: 4, state: express, check: () => setExpress(true) }
    ];

    function rating(num) {
        const score = [];
        for (let i = 0; i < 5; i++) {
            if (i < num) {
                score.push(true);
            } else {
                score.push(false);
            }
        }
        return score;
    }

    return (
        <Container>
            <Grid container rowGap={6} sx={{ margin: "2em" }}>
                {
                    skills.map((skill, i) => {
                        const delay = 400 + (500 * i);
                        const num = skill.level;
                        const lvlUp = `Requires more practice to level up this skill.`;
                        return (
                            <Grid key={skill.name} item xs={12} sm={6} md={4}>
                                <Zoom timeout={600} style={{ transitionDelay: (delay) }} in={true} >
                                    <div style={{width: "300px"}} onMouseEnter={skill.check} onMouseLeave={handleClear}>
                                        <Paper elevation={24} className="skill" sx={{
                                            height: "200px", width: "100%", bgcolor: "#00256B",
                                            color: "#FE018E", opacity: "0.9", display: "flex",
                                            flexDirection: "column", alignItems: "center", justifyContent: "space-evenly",
                                            borderRadius: "5px", fontSize: "20px"
                                        }} >
                                            {!skill.state && skillsPage < 1 ?
                                                <NewReleasesIcon className="new" fontSize="small" />
                                            : ""}
                                            <p>{skill.name}</p>
                                            <Box sx={{
                                                bgcolor: "#001C58", width: "85%", height: "40px",
                                                borderRadius: "5px", display: "flex", alignItems: "center",
                                                justifyContent: "center", gap: "5px", transform: "skew(145deg)"
                                            }}>
                                                {
                                                    rating(num).map((rating, i) => {
                                                        return (
                                                            rating ?
                                                                <Box key={i} sx={{ bgcolor: "#01D058", height: "25px", width: "30px" }} />
                                                                :
                                                                <Tooltip key={i + 100} TransitionComponent={Zoom} TransitionProps={{ timeout: 400 }} title={lvlUp}>
                                                                    <Box sx={{ bgcolor: "#014B67", height: "25px", width: "30px" }} />
                                                                </Tooltip>
                                                        )
                                                    })
                                                }
                                            </Box>
                                            {`Level: ${num} / 5`}
                                        </Paper>
                                    </div>
                                </Zoom>
                            </Grid>

                        )
                    })
                }
            </Grid>
        </Container>
    )
}