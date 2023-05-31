import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import { Avatar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { APP_URL } from "../utils/Request";


const AppBar = () => {
    const { user } = useAuth();

    return (
        <MuiAppBar elevation={0} position="sticky" color="transparent" sx={{ backdropFilter: "blur(10px)", mb: "-15px" }}>
            <Toolbar variant="dense">

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