import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar";
import AppMenu from "./components/AppMenu/AppMenu";



const App = () => {


    return (
        <Box sx={{ height: "100vh", width: "100wh", display: "flex", flexDirection: "column" }} >
            <Box sx={{ height: "100%", width: "100%", overflow: "hidden", display: "flex" }} >
                <Box sx={{ height: "100%", width: "100%", overflow: "auto", overflowX: "hidden" }} >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}


export default App;