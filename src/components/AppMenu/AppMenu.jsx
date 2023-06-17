import { Divider, MenuList, Paper } from "@mui/material";
import React from "react";
import MenuItemLink from "./MenuItemLink";
import { Favorite, Home, Search } from "@mui/icons-material";
import LibrarySection from "./LibrarySection";


const AppMenu = () => {


    return (
        <Paper elevation={0} sx={{ borderRadius: 0 }}>
            <MenuList sx={{ height: "100%", width: { xs: 55, md: 300 }, display: "flex", flexDirection: "column", overflow: "auto", overflowX: "hidden", bgcolor: "inherit" }}>
                <MenuItemLink Icon={Home} title="Home" to="/" />
                <MenuItemLink Icon={Search} title="Search" to="search" />
                <MenuItemLink Icon={Favorite} title="Likes" to="likes" />

                <Divider sx={{ my: 2, mx: .5 }} />

                <LibrarySection />
            </MenuList>
        </Paper>

    );
}

export default AppMenu;