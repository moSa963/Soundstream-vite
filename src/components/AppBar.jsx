import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import { IconButton, Toolbar, alpha } from "@mui/material";
import { List } from "@mui/icons-material";



const AppBar = () => {



    return (
        <MuiAppBar elevation={0} position="sticky" color="transparent" sx={{ backdropFilter: "blur(10px)", mb: "-15px" }}>
            <Toolbar variant="dense">
                
            </Toolbar>
        </MuiAppBar>
    );
}


export default AppBar;