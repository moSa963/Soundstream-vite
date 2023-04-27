import { Backdrop, Button, Divider, IconButton, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import { Edit } from "@mui/icons-material";
import request from "../utils/Request";



const UpdatePlaylistCard = ({ playlistId, title, description, onChange }) => {
    const [open, setOpen] = React.useState(false);
    const [newTitle, setNewTitle] = React.useState(title);
    const [newDescription, setNewDescription] = React.useState(description);

    const handleSave = () => {
        save(playlistId, newTitle, newDescription, onChange);
        setOpen(false);
    }

    const handleDelete = () => {
        
    }

    return (
        <React.Fragment>
            <IconButton onClick={() => setOpen(true)}>
                <Edit />
            </IconButton>

            <Backdrop open={open} onClick={(e) => e.currentTarget == e.target && setOpen(false)} sx={{ zIndex: 10000 }}>
                <Paper sx={{ width: "100%", p: 3, maxWidth: 550, height: "100%", maxHeight: 300, overflow: "auto" }}>
                    <Stack spacing={2} sx={{ width: "100%", alignItems: "end" }}>
                        <TextField fullWidth placeholder="Title..." value={newTitle} onChange={(e) => setNewTitle(e.target.value)} label="Title"/>

                        <TextField fullWidth placeholder="Description..." value={newDescription} onChange={(e) => setNewDescription(e.target.value)} label="Description"/>
                        
                        <Stack direction="row" spacing={2}>
                            <Button onClick={handleSave}>Save</Button>
                            <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
                        </Stack>

                        <Divider flexItem/>

                        <Button color="error" fullWidth>Delete</Button>
                    </Stack>
                </Paper>
            </Backdrop>
        </React.Fragment>
    );
}

const save = async (id, title, description, onChange) => {
    const res = await request(`api/playlists/${id}`, "POST", { title, description });

    if (res.ok)
    {
        const js = await res.json();
        onChange&&onChange(js.data);
    }
}

export default UpdatePlaylistCard;