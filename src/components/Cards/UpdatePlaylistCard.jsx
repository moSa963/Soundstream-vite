import { Backdrop, Button, Divider, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import request from "../../utils/Request";
import DeleteConfirmationCard from "./DeleteConfirmationCard";
import { usePlaylists } from "../../contexts/PlaylistsContext";
import { useNavigate } from "react-router-dom";



const UpdatePlaylistCard = ({ playlistId, title, description, onChange, open, setOpen }) => {
    const [deleteCardOpen, setDeleteCardOpen] = React.useState(false);
    const [newTitle, setNewTitle] = React.useState("");
    const [newDescription, setNewDescription] = React.useState("");
    const { setPlaylists } = usePlaylists();
    const nav = useNavigate();

    React.useEffect(() => {
        setNewTitle(title);
        setNewDescription(description);
    }, [title, description]);

    const handleSave = () => {
        save(playlistId, newTitle, newDescription, onChange);
        setOpen(false);
    }

    return (
        <Backdrop open={open} onClick={(e) => e.currentTarget == e.target && setOpen(false)} sx={{ zIndex: 10000 }}>
            <Paper sx={{ width: "100%", p: 3, maxWidth: 550, height: "100%", maxHeight: 300, overflow: "auto" }}>
                <Stack spacing={2} sx={{ width: "100%", alignItems: "end" }}>
                    <TextField fullWidth placeholder="Title..." value={newTitle} onChange={(e) => setNewTitle(e.target.value)} label="Title" />

                    <TextField fullWidth placeholder="Description..." value={newDescription} onChange={(e) => setNewDescription(e.target.value)} label="Description" />

                    <Stack direction="row" spacing={2}>
                        <Button onClick={handleSave}>Save</Button>
                        <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
                    </Stack>

                    <Divider flexItem />

                    <Button color="error" fullWidth onClick={() => setDeleteCardOpen(true)}>Delete</Button>

                    <DeleteConfirmationCard
                        onClose={() => setDeleteCardOpen(false)}
                        onConfirmed={() => remove(playlistId, setPlaylists, nav)}
                        open={deleteCardOpen}
                        title="playlist" />
                </Stack>
            </Paper>
        </Backdrop>
    );
}

const save = async (id, title, description, onChange) => {
    const res = await request(`api/playlists/${id}`, "POST", { title, description });

    if (res.ok) {
        const js = await res.json();
        onChange && onChange(js.data);
    }
}

const remove = async (playlistId, setPlaylists, nav) => {
    const res = await request(`api/playlists/${playlistId}`, "DELETE");

    if (res.ok) {
        setPlaylists(ps => ps.filter(v => v.id != playlistId));
        nav("/playlist");
    }
}

export default UpdatePlaylistCard;