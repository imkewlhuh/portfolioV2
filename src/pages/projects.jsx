import {
    Container, Paper, Card, CardMedia,
    CardContent, Link, Fade, Grow,
    Box
} from "@mui/material";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { useState } from "react";
import useNavStore from "../store.js";

function Project(props) {

    return (
        <Grow timeout={750} style={{ transitionDelay: (props.delay), transformOrigin: "0 0 0", }} in={true}>
            <Card elevation={18} className="project" sx={{
                bgcolor: "#001C58",
                color: "#FE018E", display: "flex",
                flexDirection: "column", textAlign: "center",
                borderRadius: "5px",
            }} >
                {!props.state && props.page < 1 ?
                    <NewReleasesIcon className="new" fontSize="small" />
                    : ""}
                <CardMedia
                    sx={{ height: "160px", width: "100%", backgroundSize: "100% 100%" }}
                    image={props.image}
                />
                <CardContent>
                    <h2>{props.name}</h2>
                    <p style={{ color: "#01D058" }}>{props.desc}</p>
                    <br />
                    <Link onClickCapture={props.check} onClick={props.handleClear} target={"_blank"} href={props.live} underline="hover">Live Demo</Link>
                    {` - `}
                    <Link onClickCapture={props.check} onClick={props.handleClear} target={"_blank"} href={props.code} underline="hover">Code</Link>
                </CardContent>
            </Card>
        </Grow>
    )
};

export default function Projects() {
    const [pokeBattle, setPokeBattle] = useState(false);
    const [petAPI, setPetAPI] = useState(false);
    const [mancala, setMancala] = useState(false);

    const projectsPage = useNavStore((state) => state.projects);
    const setPage = useNavStore((state) => state.setPageVisited);

    const handleClear = () => {
        if (projectsPage < 1 && pokeBattle && petAPI && mancala) {
            setPage("projects");
            console.log("Projects cleared");
        }
    }

    const projects = [{
        image: "/images/battle.png",
        name: "PokeBattle!",
        desc: "API calling using React Router + Axios",
        live: "https://pokebattle-imkewlhuh.vercel.app/",
        code: "https://github.com/imkewlhuh/pokebattle",
        state: pokeBattle,
        check: () => setPokeBattle(true)
    }, {
        image: "/images/capPic.png",
        name: "InventGenie",
        desc: "Inventory Management app built with React, React Router, and Bootstrap",
        live: "https://capstone-group-3-imkewlhuh.vercel.app/home",
        code: "https://github.com/imkewlhuh/Capstone-Group-3",
        state: petAPI,
        check: () => setPetAPI(true)
    }, {
        image: "/images/mancala.png",
        name: "Mancala",
        desc: "Classic Mancala board game using HTML, CSS, and JavaScript",
        live: "https://imkewlhuh.github.io/Mancala/",
        code: "https://github.com/imkewlhuh/Mancala",
        state: mancala,
        check: () => setMancala(true)
    }
    ];

    return (
        <Container sx={{ marginTop: "2em" }}>
            <Fade timeout={900} in={true}>
                <Paper elevation={24} sx={{ borderRadius: "10px", padding: "2em", bgcolor: "#00256B", color: "#D30077", opacity: "0.9", display: "flex", justifyContent: "space-evenly", fontSize: "18px" }} >
                    {projects.map((project, i) => {
                        let delay = 700 + (600 * i);
                        return (
                            <Box sx={{ maxWidth: "30%" }} key={project.name}>
                                <Project {...project} page={projectsPage} handleClear={handleClear} delay={delay} />
                            </Box>
                        )
                    })}
                </Paper>
            </Fade>
        </Container>
    )
}