import { Divider, InputBase } from "@mui/material";
import React from "react";
import MenuItemLink from "../AppMenu/MenuItemLink";
import request from "../../utils/Request";
import { usePlaylists } from "../../contexts/PlaylistsContext";
import Dialog from "./Dialog";
import { useAuth } from "../../contexts/AuthContext";
import { useMessage } from "../../contexts/MessageContext";



const AddToPlaylistCard = ({ track, open, onClose }) => {
    const { playlists } = usePlaylists();
    const [searchKey, setSearchKey] = React.useState("");
    const { user } = useAuth();
    const { setError, setInfo } = useMessage();

    const handleAdd = (playlist) => {
        create(playlist, track, setError, setInfo);
        onClose();
    }

    return (
        <Dialog open={open} setOpen={onClose} >
            <InputBase
                value={searchKey}
                onChange={(e) => setSearchKey(e.currentTarget.value)}
                placeholder="Search..."
                sx={{ width: "100%", px: 1, fontSize: 20 }}
            />

            <Divider flexItem />

            {
                playlists?.filter(v => filterPlaylists(v, searchKey, user))
                        .map((e) => (
                            <MenuItemLink key={e.id} title={e?.title} small onClick={() => handleAdd(e)} />
                        ))
            }
        </Dialog >
    );
}

const create = async (playlist, track, setError, setInfo) => {
    try {
        await request(`api/playlists/${playlist.id}/tracks/${track.id}`, "POST");
        setInfo(`The track has been added to ${playlist.title} successfully.`);
    }
    catch (error) {
        setError(error);
    }
}

const filterPlaylists = (playlist, searchKey, user) => {
    return !playlist.album 
            && playlist.user.username == user.username 
            && playlist.title.toLowerCase().startsWith(searchKey.toLowerCase());
}

export default AddToPlaylistCard;