import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import MenuItemLink from "../AppMenu/MenuItemLink";
import { PlaylistAdd } from "@mui/icons-material";
import request from "../../utils/Request";
import Dialog from "./Dialog";
import { usePlaylists } from "../../contexts/PlaylistsContext";



const CreatePlaylistCard = () => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const { setPlaylists } = usePlaylists();

    const handleAdd = () => {
        create(title, (p) => setPlaylists(ps => [...ps, p]));
        setOpen(false);
    }

    return (
        <React.Fragment>
            <MenuItemLink Icon={PlaylistAdd} title="Creat Playlist" onClick={() => setOpen(true)} />

            <Dialog open={open} setOpen={setOpen}>
                <TextField fullWidth placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)} />
                <Stack direction="row" spacing={2}>
                    <Button onClick={handleAdd}>Add</Button>
                    <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
                </Stack>
            </Dialog >
        </React.Fragment>
    );
}

const create = async (title, onPlaylistAdded) => {
    const data = {};

    title && (data["title"] = title);

    const res = await request("api/playlists", "POST", data);


    if (res.ok) {
        const js = await res.json();
        onPlaylistAdded(js.data);
    }
}

export default CreatePlaylistCard;