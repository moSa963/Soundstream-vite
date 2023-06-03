import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import request from "../../utils/Request";
import Dialog from "./Dialog";



const CreateAlbumCard = ({ onAlbumAdded }) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");

    return (
        <React.Fragment>
            <Button fullWidth onClick={() => setOpen(true)} variant="text">Create New Album</Button>

            <Dialog open={open} setOpen={setOpen}>
                <TextField fullWidth placeholder="Name..." value={title} onChange={(e) => setTitle(e.target.value)} />

                <Stack direction="row" spacing={2}>
                    <Button onClick={() => {
                        create(title, onAlbumAdded)
                        setOpen(false);

                    }}>Create</Button>
                    <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
                </Stack>
            </Dialog >
        </React.Fragment>
    );
}

const create = async (title, onAlbumAdded) => {
    const res = await request("api/albums", "POST", { title });

    if (res.ok) {
        const js = await res.json();
        onAlbumAdded(js.data);
    }
}
export default CreateAlbumCard;