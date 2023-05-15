import { Button, Divider, Stack, Switch, TextField, Typography } from "@mui/material";
import React from "react";
import request from "../../utils/Request";
import DeleteConfirmationCard from "./DeleteConfirmationCard";
import { useNavigate } from "react-router-dom";
import CardBase from "./CardBase";



const UpdateTrackCard = ({ track, setTracks, onChange, open, setOpen }) => {
    const [inputs, setInputs] = React.useState();
    const [deleteCardOpen, setDeleteCardOpen] = React.useState(false);
    const nav = useNavigate();

    React.useEffect(() => {
        setInputs({ title: track.title, explicit: track.explicit });
    }, [track]);

    const handleSave = () => {
        save(track.id, inputs, onChange);
        setOpen(false);
    }

    return (
        <CardBase open={open} setOpen={setOpen}>
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

            <DeleteConfirmationCard
                onClose={() => setDeleteCardOpen(false)}
                onConfirmed={() => remove(track.id, setTracks, nav)}
                open={deleteCardOpen}
                title="track" />
        </CardBase>
    );
}

const save = async (id, data, onChange) => {
    const res = await request(`api/tracks/${id}`, "POST", data);

    if (res.ok) {
        const js = await res.json();
        onChange && onChange(js.data);
    }
}

const remove = async (id, setTracks, nav) => {
    const res = await request(`api/tracks/${id}`, "DELETE");

    if (res.ok) {
        setTracks(ps => ps.filter(v => v.id != id));
        nav("/");
    }
}

export default UpdateTrackCard;