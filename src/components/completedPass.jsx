import {
    Card, CardMedia, CardContent, Box,
    Modal, Zoom, Backdrop
} from "@mui/material";
import { useState } from "react";

export default function PassReward(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    if (!open && props.pass === 1) {
        handleOpen();
        console.log("Claim Reward");
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{ backdrop: { timeout: {
                appear: 4000,
                enter: 4000
            }} }}
        >
            <Zoom timeout={1000} style={{ transitionDelay: 4000 }} in={open}>
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
                        Your New Employee
                    <CardContent>
                        
                    </CardContent>
                </Card>
            </Zoom>
        </Modal>
    )
}