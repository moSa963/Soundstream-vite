import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import { Avatar, Box, Toolbar } from "@mui/material";


const AppBar = () => {



    return (
        <MuiAppBar elevation={0} position="sticky" color="transparent" sx={{ backdropFilter: "blur(10px)", mb: "-15px" }}>
            <Toolbar variant="dense">

                <Box sx={{ flexGrow: 1 }}/>

                <Avatar sx={{ transform: "scale(0.95)", ":hover": { transform: "scale(1)" }, cursor: "pointer" }} />
            </Toolbar>
        </MuiAppBar>
    );
}


export default AppBar;