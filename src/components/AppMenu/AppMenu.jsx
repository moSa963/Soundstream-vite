import { Divider, MenuList, Paper } from "@mui/material";
import React from "react";
import MenuItemLink from "./MenuItemLink";
import { Favorite, HeartBrokenOutlined, HeatPumpRounded, Home, HomeMax, LibraryAdd, PlaylistAdd, Search } from "@mui/icons-material";
import CreatePlaylistCard from "../CreatePlaylistCard";


const AppMenu = ({ playlists }) => {


    return (
        <Paper elevation={0} sx={{ borderRadius: 0 }}>
            <MenuList sx={{ height: "100%", width: 300, display: "flex", flexDirection: "column", overflow: "auto", overflowX: "hidden" }}>
                <MenuItemLink Icon={Home} title="Home" to="home" />
                <MenuItemLink Icon={Search} title="Search" to="search" />
                <MenuItemLink Icon={LibraryAdd} title="Library" to="library" />
                
                <MenuItemLink  />

                <CreatePlaylistCard />
                <MenuItemLink Icon={Favorite} title="Likes" to="likes" />

                <Divider sx={{ my: 2, mx: .5 }}/>

                { playlists?.map((e) => <MenuItemLink key={e.id} title={e?.name} small/>) }

            </MenuList>
        </Paper>

    );
}


export default AppMenu;