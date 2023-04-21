import { Backdrop, Button, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import MenuItemLink from "./AppMenu/MenuItemLink";
import { PlaylistAdd } from "@mui/icons-material";



const CreatePlaylistCard = () => {
    const [open, setOpen] = React.useState(false);

    const handleAdd = () => {

    }


    return (
        <React.Fragment>
            <MenuItemLink Icon={PlaylistAdd} title="Creat Playlist" onClick={() => setOpen(true)} />

            <Backdrop open={open} onClick={(e) => e.currentTarget == e.target && setOpen(false)} sx={{ zIndex: 10000 }}>
                <Paper sx={{ width: "100%", p: 3, maxWidth: 550, }}>
                    <Stack spacing={2} sx={{ width: "100%", alignItems: "end" }}>
                        <TextField fullWidth placeholder="Title..." />
                        <Stack direction="row" spacing={2}>
                            <Button onClick={handleAdd}>Add</Button>
                            <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Backdrop>
        </React.Fragment>
    );
}


export default CreatePlaylistCard;