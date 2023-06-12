import { Button, IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import request from "../../utils/Request";
import Dialog from "./Dialog";
import { usePlaylists } from "../../contexts/PlaylistsContext";
import { useMessage } from "../../contexts/MessageContext";
import { Add } from "@mui/icons-material";


const CreatePlaylistCard = () => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const { setPlaylists } = usePlaylists();
    const { setInfo, setError } = useMessage();

    const handleAdd = () => {
        create(title, (p) => setPlaylists(ps => [...ps, p]), setInfo, setError);
        setOpen(false);
    }

    return (
        <React.Fragment>
            <IconButton size="small" sx={{ height: "fit-content", width: "fit-content" }} onClick={() => setOpen(true)}>
                <Add />
            </IconButton>

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

const create = async (title, onPlaylistAdded, setInfo, setError) => {
    try {
        const data = {};

        title && (data["title"] = title);
    
        const res = await request("api/playlists", "POST", data);
        const js = await res.json();

        onPlaylistAdded(js.data);
        setInfo(`${js.data.title} has been created successfully.`);
    }
    catch (error) {
        setError(error);
    }
}

export default CreatePlaylistCard;