import { Backdrop, Button, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import request from "../../utils/Request";



const CreateAlbumCard = ({ onAlbumAdded }) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");

    return (
        <React.Fragment>
            <Button fullWidth onClick={() => setOpen(true)} variant="text">Create New Album</Button>

            <Backdrop open={open} onClick={(e) => e.currentTarget == e.target && setOpen(false)} sx={{ zIndex: 10000 }}>
                <Paper sx={{ width: "100%", p: 3, maxWidth: 550, }}>
                    <Stack spacing={2} sx={{ width: "100%", alignItems: "end" }}>
                        <TextField fullWidth placeholder="Name..." value={title} onChange={(e) => setTitle(e.target.value)} />

                        <Stack direction="row" spacing={2}>
                            <Button onClick={() => {
                                create(title, onAlbumAdded)
                                setOpen(false);

                            }}>Create</Button>
                            <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Backdrop>
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