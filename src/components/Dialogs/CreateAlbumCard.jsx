import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import request from "../../utils/Request";
import Dialog from "./Dialog";
import { useMessage } from "../../contexts/MessageContext";



const CreateAlbumCard = ({ onAlbumAdded }) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const {setError, setInfo} = useMessage();
    
    return (
        <React.Fragment>
            <Button fullWidth onClick={() => setOpen(true)} variant="text">Create New Album</Button>

            <Dialog open={open} setOpen={setOpen}>
                <TextField fullWidth placeholder="Name..." value={title} onChange={(e) => setTitle(e.target.value)} />

                <Stack direction="row" spacing={2}>
                    <Button onClick={() => {
                        create(title, onAlbumAdded, setError, setInfo)
                        setOpen(false);

                    }}>Create</Button>
                    <Button color="error" onClick={(e) => setOpen(false)}>Cancel</Button>
                </Stack>
            </Dialog >
        </React.Fragment>
    );
}

const create = async (title, onAlbumAdded, setError, setInfo) => {
    try {
        const js = await (await request("api/albums", "POST", { title })).json();
        onAlbumAdded(js.data);
        setInfo(`A new album has been created.`);
    }
    catch (error) {
        setError(error);
    }
}
export default CreateAlbumCard;