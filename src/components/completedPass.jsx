import {
    Card, CardMedia, CardContent, Box,
    Modal, Zoom, Backdrop, Fab
} from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useState } from "react";

export default function PassReward(props) {
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setHide(true);

    if (props.pass === 1 && !show && !hide) {
        handleOpen();
        console.log("Claim Reward");
    }

    return (
        <Modal
            open={show && !hide}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 1000
                }
            }}
        >
            <Zoom timeout={1000} style={{ transitionDelay: 4000 }} in={show && !hide} mountOnEnter="true" unmountOnExit="true">
                <Card elevation={24} style={{
                    position: 'absolute', top: "50%", left: "50%",
                    width: "400px", height: "500px", padding: "1rem",
                    transform: "translate(-50%, -50%)", display: "flex",
                    flexDirection: "column", alignItems: "center",
                    justifyContent: "space-evenly",
                    backgroundColor: "#001C58", color: "#FE018E",
                    borderRadius: "10px", textAlign: "center"
                }} >
                    Congratulations! You completed the Battle Pass. You have unlocked:
                    <CardMedia
                        sx={{ borderRadius: "10px", height: "200px", width: "50%", backgroundSize: "100% 100%" }}
                        image="../src/reward.jpg" />
                    Your New Employee:
                    <br />
                    Rafael Lopez
                    <CardContent>
                        <Fab target="_blank" href="https://docs.google.com/document/d/1yIT7rRRNKI53FU4-l-qW4LMbsFfCrcy_HiEr15kmqyo/edit?usp=sharing"
                            variant="extended" style={{ backgroundColor: "#001C58", color: "#FE018E", opacity: "0.7", fontFamily: "NeuroPolitical" }}>
                            <ArticleIcon />
                            Resume
                        </Fab>
                        <Fab target="_blank" href="mailto:rafael.lopez0827@gmail.com"
                            variant="extended" style={{ backgroundColor: "#001C58", color: "#FE018E", opacity: "0.7", fontFamily: "NeuroPolitical", marginLeft: "1em" }}>
                            <AlternateEmailIcon />
                            Email
                        </Fab>

                    </CardContent>
                </Card>
            </Zoom>
        </Modal>
    )
}