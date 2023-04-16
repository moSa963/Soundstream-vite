import { Backdrop, Paper } from "@mui/material";
import React from "react";
import MenuItemLink from "./AppMenu/MenuItemLink";
import { PlaylistAdd } from "@mui/icons-material";



const CreatePlaylistCard = () => {
    const [open, setOpen] = React.useState(false);


    return (
        <React.Fragment>
            <MenuItemLink Icon={PlaylistAdd} title="Creat Playlist" onClick={() => setOpen(true)} />

            <Backdrop open={open} onClick={(e) => e.currentTarget == e.target && setOpen(false)}>
                <Paper sx={{ width: "100%", height: "100%", maxWidth: 550, maxHeight: 300 }}>
                    
                </Paper>
            </Backdrop>
        </React.Fragment>
    );
}


export default CreatePlaylistCard;