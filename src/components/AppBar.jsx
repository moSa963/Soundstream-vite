import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";



const AppBar = () => {



    return (
        <MuiAppBar elevation={0} position="absolute" color="transparent">
            <Toolbar variant="dense">
            </Toolbar>
        </MuiAppBar>
    );
}


export default AppBar;