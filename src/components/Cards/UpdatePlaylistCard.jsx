import { Button, Divider, Stack, TextField } from "@mui/material";
import React from "react";
import request from "../../utils/Request";
import DeleteConfirmationCard from "./DeleteConfirmationCard";
import { usePlaylists } from "../../contexts/PlaylistsContext";
import { useNavigate } from "react-router-dom";
import CardBase from "./CardBase";


const UpdatePlaylistCard = ({ playlist, onChange, open, setOpen }) => {
    const [deleteCardOpen, setDeleteCardOpen] = React.useState(false);
    const [inputs, setInputs] = React.useState({});
    const { setPlaylists } = usePlaylists();
    const nav = useNavigate();

    React.useEffect(() => {
        setInputs({ title: playlist.title, description: playlist.description });
    }, [playlist]);

    const handleSave = () => {
        save(playlist, inputs, onChange);
        setOpen(false);
    }

    return (
        <CardBase open={open} setOpen={setOpen}>
            <TextField fullWidth placeholder="Title..." value={inputs?.title || ""} onChange={(e) => setInputs({ ...inputs, title: e.target.value })} label="Title" />

            <TextField fullWidth placeholder="Description..." value={inputs?.description || ""} onChange={(e) => setInputs({ ...inputs, description: e.target.value })} label="Description" />

            <Stack direction="row" spacing={2}>
                <Button onClick={handleSave}>Save</Button>
                <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
            </Stack>

            <Divider flexItem />

            <Button color="error" fullWidth onClick={() => setDeleteCardOpen(true)}>Delete</Button>

            <DeleteConfirmationCard
                onClose={() => setDeleteCardOpen(false)}
                onConfirmed={() => remove(playlist, setPlaylists, nav)}
                open={deleteCardOpen}
                title="playlist" />
        </CardBase>
    );
}

const save = async (playlist, data, onChange) => {
    const res = await request(`api/playlists/${playlist.id}`, "POST", data);

    if (res.ok) {
        const js = await res.json();
        onChange && onChange(js.data);
    }
}

const remove = async (playlist, setPlaylists, nav) => {
    const res = await request(`api/playlists/${playlist.id}`, "DELETE");

    if (res.ok) {
        setPlaylists(ps => ps.filter(v => v.id != playlist.id));
        nav("/playlist");
    }
}

export default UpdatePlaylistCard;