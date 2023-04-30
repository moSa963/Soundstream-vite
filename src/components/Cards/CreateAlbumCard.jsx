import { Backdrop, Button, Paper, Stack, TextField } from "@mui/material";
import React from "react";



const CreateAlbumCard = () => {
    const [open, setOpen] = React.useState(false);

    const handleCreate = () => {

    }

    return (
        <React.Fragment>
            <Button fullWidth onClick={() => setOpen(true)} variant="text">Create New Album</Button>
            
            <Backdrop open={open} onClick={(e) => e.currentTarget == e.target && setOpen(false)} sx={{ zIndex: 10000 }}>
                <Paper sx={{ width: "100%", p: 3, maxWidth: 550, }}>
                    <Stack spacing={2} sx={{ width: "100%", alignItems: "end" }}>
                        <TextField fullWidth placeholder="Name..." />

                        <Stack direction="row" spacing={2}>
                            <Button onClick={handleCreate}>Create</Button>
                            <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Backdrop>
        </React.Fragment>
    );
}


export default CreateAlbumCard;