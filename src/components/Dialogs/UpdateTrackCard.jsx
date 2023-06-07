import { Button, Divider, Stack, Switch, TextField, Typography } from "@mui/material";
import React from "react";
import request from "../../utils/Request";
import ConfirmationCard from "./ConfirmationCard";
import { useNavigate } from "react-router-dom";
import Dialog from "./Dialog";
import { useMessage } from "../../contexts/MessageContext";



const UpdateTrackCard = ({ track, setTracks, onChange, open, setOpen }) => {
    const [inputs, setInputs] = React.useState();
    const [deleteCardOpen, setDeleteCardOpen] = React.useState(false);
    const nav = useNavigate();
    const { setError, setInfo } = useMessage();

    React.useEffect(() => {
        setInputs({ title: track.title, explicit: track.explicit });
    }, [track]);

    const handleSave = () => {
        save(track.id, inputs, onChange, setError, setInfo);
        setOpen(false);
    }

    return (
        <Dialog open={open} setOpen={setOpen}>
            <TextField fullWidth placeholder="Title..." value={inputs?.title || ""} onChange={(e) => setInputs({ ...inputs, title: e.target.value })} label="Title" />

            <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
                <Typography>Explicit</Typography>
                <Switch checked={Boolean(inputs?.explicit)} onChange={(_, v) => setInputs({ ...inputs, explicit: v })} />
            </Stack>

            <Stack direction="row" spacing={2}>
                <Button onClick={handleSave}>Save</Button>
                <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
            </Stack>

            <Divider flexItem />

            <Button color="error" fullWidth onClick={() => setDeleteCardOpen(true)}>Delete</Button>

            <ConfirmationCard
                onClose={() => setDeleteCardOpen(false)}
                onConfirmed={() => remove(track?.id, setTracks, nav, setError, setInfo)}
                open={deleteCardOpen}
                message="Are you sure you want to delete this track?" />
        </Dialog >
    );
}

const save = async (id, data, onChange, setError, setInfo) => {
    try {
        const res = await request(`api/tracks/${id}`, "POST", data);
        const js = await res.json();
        onChange && onChange(js.data);
        setInfo("The track has been updated successfully.");
    }
    catch (error) {
        setError(error);
    }
}

const remove = async (id, setTracks, nav, setError, setInfo) => {
    try {
        await request(`api/tracks/${id}`, "DELETE");
        setTracks(ps => ps.filter(v => v.id != id));
        nav("/");
        setInfo("The track has been deleted successfully.");
    }
    catch (error) {
        setError(error);
    }
}

export default UpdateTrackCard;