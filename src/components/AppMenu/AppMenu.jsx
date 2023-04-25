import { Divider, MenuList, Paper } from "@mui/material";
import React from "react";
import MenuItemLink from "./MenuItemLink";
import { Favorite, Home, LibraryAdd, Search } from "@mui/icons-material";
import CreatePlaylistCard from "../CreatePlaylistCard";
import request from "../../utils/Request";


const AppMenu = () => {
    const [playlists, SetPlaylists] = React.useState([]);

    React.useEffect(() => {
        loadData(SetPlaylists);
    }, []);

    return (
        <Paper elevation={0} sx={{ borderRadius: 0 }}>
            <MenuList sx={{ height: "100%", width: 300, display: "flex", flexDirection: "column", overflow: "auto", overflowX: "hidden" }}>
                <MenuItemLink Icon={Home} title="Home" to="/" />
                <MenuItemLink Icon={Search} title="Search" to="search" />
                <MenuItemLink Icon={LibraryAdd} title="Library" to="library" />
                
                <MenuItemLink  />

                <CreatePlaylistCard onPlaylistAdded={(playlist) => SetPlaylists(ps => [...ps, playlist])}/>

                <MenuItemLink Icon={Favorite} title="Likes" to="likes" />

                <Divider sx={{ my: 2, mx: .5 }}/>

                { playlists?.map((e) => <MenuItemLink key={e.id} title={e?.title} small to={`/playlist/${e.id}`}/>) }

            </MenuList>
        </Paper>

    );
}

const loadData = async (setData) => {
    const res = await request("api/playlists");

    if (res.ok){
        const js = await res.json();
        setData(js.data);
    }
}

export default AppMenu;