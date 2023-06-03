import { Button, Divider, Stack, TextField } from "@mui/material";
import React from "react";
import request from "../../utils/Request";
import ConfirmationCard from "./ConfirmationCard";
import { usePlaylists } from "../../contexts/PlaylistsContext";
import { useNavigate } from "react-router-dom";
import Dialog from "./Dialog";
import { useMessage } from "../../contexts/MessageContext";


const UpdatePlaylistCard = ({ playlist, onChange, open, setOpen }) => {
    const [deleteCardOpen, setDeleteCardOpen] = React.useState(false);
    const [inputs, setInputs] = React.useState({});
    const { setPlaylists } = usePlaylists();
    const nav = useNavigate();
    const { setMessage } = useMessage();


    React.useEffect(() => {
        setInputs({ title: playlist.title, description: playlist.description });
    }, [playlist]);

    const handleSave = () => {
        save(playlist, inputs, onChange, setMessage);
        setOpen(false);
    }

    return (
        <Dialog open={open} setOpen={setOpen}>
            <TextField fullWidth placeholder="Title..." value={inputs?.title || ""} onChange={(e) => setInputs({ ...inputs, title: e.target.value })} label="Title" />

            <TextField fullWidth placeholder="Description..." value={inputs?.description || ""} onChange={(e) => setInputs({ ...inputs, description: e.target.value })} label="Description" />

            <Stack direction="row" spacing={2}>
                <Button onClick={handleSave}>Save</Button>
                <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
            </Stack>

            <Divider flexItem />

            <Button color="error" fullWidth onClick={() => setDeleteCardOpen(true)}>Delete</Button>

            <ConfirmationCard
                onClose={() => setDeleteCardOpen(false)}
                onConfirmed={() => remove(playlist, setPlaylists, nav, setMessage)}
                open={deleteCardOpen}
                message="Are you sure you want to delete this playlist?" />
        </Dialog >
    );
}

const save = async (playlist, data, onChange, setMessage) => {
    try {
        const res = await request(`api/playlists/${playlist.id}`, "POST", data);
        const js = await res.json();
        onChange && onChange(js.data);
    }
    catch (message) {
        setMessage({ type: "error", title: message })
    }
}

const remove = async (playlist, setPlaylists, nav, setMessage) => {
    try {
        await request(`api/playlists/${playlist.id}`, "DELETE");
        setPlaylists(ps => ps.filter(v => v.id != playlist.id));
        nav("/playlist");
    }
    catch (message) {
        setMessage({ type: "error", title: message })
    }
}

export default UpdatePlaylistCard;