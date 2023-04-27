import { Box, Paper } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar";
import AppMenu from "./components/AppMenu/AppMenu";
import PlayerProvider from "./contexts/PlayerContext";
import AuthProvider from "./contexts/AuthContext";



const App = () => {


    return (
        <Box sx={{ height: "100vh", width: "100wh", display: "flex", flexDirection: "column" }} >
            <AuthProvider>
                <PlayerProvider>
                    <Box sx={{ height: "100%", width: "100%", overflow: "hidden", display: "flex" }} >
                        <AppMenu />
                        <Paper sx={{ height: "100%", width: "100%", position: "relative", overflow: "auto", overflowX: "hidden", borderRadius: 0 }} >
                            <AppBar />
                            <Outlet />
                        </Paper>
                    </Box>
                </PlayerProvider>
            </AuthProvider>
        </Box>
    );
}


export default App;