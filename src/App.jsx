import { Box, Paper } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import AppMenu from "./components/AppMenu/AppMenu";
import PlayerProvider from "./contexts/PlayerContext";
import AuthProvider from "./contexts/AuthContext";
import PlaylistsProvider from "./contexts/PlaylistsContext";
import MessageProvider from "./contexts/MessageContext";
import ScrollProvider from "./contexts/ScrollContext";



const App = () => {


    return (
        <Box sx={{ height: "100vh", bgcolor: "background.default", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
            <MessageProvider>
                <AuthProvider>
                    <PlaylistsProvider>
                        <PlayerProvider>
                            <Box sx={{ height: "100%", width: "100%", overflow: "hidden", display: "flex" }} >
                                <AppMenu />
                                <ScrollProvider>
                                    <AppBar />
                                    <Outlet />
                                </ScrollProvider>
                            </Box>
                        </PlayerProvider>
                    </PlaylistsProvider>
                </AuthProvider>
            </MessageProvider>
        </Box>
    );
}


export default App;