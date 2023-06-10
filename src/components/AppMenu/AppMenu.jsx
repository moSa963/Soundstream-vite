import { Box, Divider, MenuList, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import MenuItemLink from "./MenuItemLink";
import { Favorite, Home, LibraryAdd, Search } from "@mui/icons-material";
import CreatePlaylistCard from "../Dialogs/CreatePlaylistCard";
import { usePlaylists } from "../../contexts/PlaylistsContext";
import { Link } from "react-router-dom";
import PlaylistItem from "../Playlist/PlaylistItem";


const AppMenu = () => {
    const { playlists } = usePlaylists();

    return (
        <Paper elevation={0} sx={{ borderRadius: 0 }}>
            <MenuList sx={{ height: "100%", width: { xs: 55, md: 300 }, display: "flex", flexDirection: "column", overflow: "auto", overflowX: "hidden" }}>
                <MenuItemLink Icon={Home} title="Home" to="/" />
                <MenuItemLink Icon={Search} title="Search" to="search" />
                <MenuItemLink Icon={LibraryAdd} title="Library" to="library" />

                <MenuItemLink />

                <CreatePlaylistCard />

                <MenuItemLink Icon={Favorite} title="Likes" to="likes" />

                <Divider sx={{ my: 2, mx: .5 }} />

                <Link to="/library/playlists">
                    <Box sx={{ width: "100%", display: "flex", p: .3 }}>
                        <Typography variant="caption" color="primary" sx={{ cursor: "pointer", ":hover": { transform: "scale(1.1)" } }}>Playlists</Typography>
                    </Box>
                </Link>

                <Stack spacing={.5}>
                    {playlists?.map((e) => <PlaylistItem key={e.id} playlist={e} small />)}
                </Stack>
            </MenuList>
        </Paper>

    );
}

export default AppMenu;