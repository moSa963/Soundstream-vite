import { Backdrop, Button, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import MenuItemLink from "./AppMenu/MenuItemLink";
import { PlaylistAdd } from "@mui/icons-material";
import request from "../utils/Request";



const CreatePlaylistCard = ({ onPlaylistAdded }) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");

    const handleAdd = () => {
        create(title, onPlaylistAdded);
        setOpen(false);
    }

    return (
        <React.Fragment>
            <MenuItemLink Icon={PlaylistAdd} title="Creat Playlist" onClick={() => setOpen(true)} />

            <Backdrop open={open} onClick={(e) => e.currentTarget == e.target && setOpen(false)} sx={{ zIndex: 10000 }}>
                <Paper sx={{ width: "100%", p: 3, maxWidth: 550, }}>
                    <Stack spacing={2} sx={{ width: "100%", alignItems: "end" }}>
                        <TextField fullWidth placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <Stack direction="row" spacing={2}>
                            <Button onClick={handleAdd}>Add</Button>
                            <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Backdrop>
        </React.Fragment>
    );
}

const create = async (title, onPlaylistAdded) => {
    const data = {};

    title && (data[title] = title);
    
    const res = await request("api/playlists", "POST", data);


    if (res.ok)
    {
        const js = await res.json();
        onPlaylistAdded(js.data);
    }
}

export default CreatePlaylistCard;