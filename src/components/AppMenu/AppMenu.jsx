import { Divider, MenuList, Paper } from "@mui/material";
import React from "react";
import MenuItemLink from "./MenuItemLink";


const AppMenu = () => {


    return (
        <Paper elevation={0} sx={{ borderRadius: 0 }}>

            <MenuList sx={{ height: "100%", width: 400, display: "flex", flexDirection: "column", overflow: "auto" }}>

            </MenuList>
        </Paper>

    );
}


export default AppMenu;