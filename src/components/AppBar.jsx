import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import { Avatar, Box, Fade, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { APP_URL } from "../utils/Request";
import { useMessage } from "../contexts/MessageContext";


const AppBar = () => {
    const { user } = useAuth();
    const { message } = useMessage();

    return (
        <MuiAppBar elevation={0} position="sticky" color="transparent" sx={{ backdropFilter: "blur(10px)", mb: "-15px" }}>
            <Toolbar variant="dense">

                <Fade in={message.title != ""} >
                    <Typography noWrap fontWeight="bold" title={message.title} color={message?.type == "error" ? "error" : "primary"}>{message.title}</Typography>
                </Fade>

                <Box sx={{ flexGrow: 1 }} />

                <Link to="/account">
                    <Avatar src={`${APP_URL}api/account/${user.username}/profile/photo`}
                        sx={{ transform: "scale(0.95)", ":hover": { transform: "scale(1)" }, cursor: "pointer" }} />
                </Link>
            </Toolbar>
        </MuiAppBar>
    );
}


export default AppBar;