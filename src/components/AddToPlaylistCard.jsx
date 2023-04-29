import { Backdrop, Divider, InputBase, Paper, Stack } from "@mui/material";
import React from "react";
import MenuItemLink from "./AppMenu/MenuItemLink";
import request from "../utils/Request";
import { usePlaylists } from "../contexts/PlaylistsContext";



const AddToPlaylistCard = ({ track, open, onClose }) => {
    const { playlists } = usePlaylists();
    const [filter, setFilter] = React.useState("");

    const handleAdd = (playlist) => {
        create(playlist, track);
        onClose();
    }

    return (
        <Backdrop open={open} onClick={(e) => e.currentTarget == e.target && onClose()} sx={{ zIndex: 10000 }}>
            <Paper sx={{ width: "100%", p: 1, maxWidth: 550, }}>
                <Stack spacing={2} sx={{ width: "100%", maxHeight: 300, overflow: "auto", alignItems: "end" }}>
                    <InputBase
                        value={filter}
                        onChange={(e) => setFilter(e.currentTarget.value)}
                        placeholder="Search..."
                        sx={{ width: "100%", px: 1, fontSize: 20 }}
                    />

                    <Divider flexItem/>

                    {playlists?.filter((v) => v.title.toLowerCase().startsWith(filter.toLowerCase()))
                        .map((e) => <MenuItemLink key={e.id} title={e?.title} small onClick={() => handleAdd(e)} />)}
                </Stack>
            </Paper>
        </Backdrop>
    );
}

const create = async (playlist, track) => {
    await request(`api/playlists/${playlist.id}/tracks/${track.id}`, "POST");
}

export default AddToPlaylistCard;