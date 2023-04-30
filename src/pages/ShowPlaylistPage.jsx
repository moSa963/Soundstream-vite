import { Box } from "@mui/material";
import React from "react";
import request, { APP_URL } from "../utils/Request";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Playlist from "../components/Playlist";
import { usePlaylists } from "../contexts/PlaylistsContext";
import AddToPlaylistCard from "../components/Cards/AddToPlaylistCard";



const ShowPlaylistPage = () => {
    const { data } = useLoaderData();
    const [tracks, setTracks] = React.useState([]);
    const { user } = useAuth();
    const { setPlaylists } = usePlaylists();
    const [action, setAction] = React.useState({ name: null, payload: null });

    const handleAction = (action, track) => {
        switch(action)
        {
            case "Add to playlist": setAction({ name: action, payload: track });
            case "Remove from this playlist": remove(data, track, () => setTracks(ts => ts.filter(v => v.id != track.id)));
        }
    }

    return (
        <Box sx={{ width: "100%" }}>
            <Playlist
                tracks={tracks}
                setTracks={setTracks}
                type="playlist"
                playlist={data}
                dataUrl={`api/playlists/${data.id}/tracks`}
                avatar={`${APP_URL}api/playlists/${data.id}/photo`}
                enableEdit={data.user.username == user.username}
                onAvatarChange={(file) => UpdateImage(data, file)}
                onChange={(newData) => setPlaylists(ps => {
                    ps[ps.findIndex(v => v.id == data.id)] = newData;
                    return [...ps];
                })}
                actions={["Remove from this playlist", "Add to playlist"]}
                onAction={handleAction}
            />

            <AddToPlaylistCard open={action.name == "Add to playlist"}  track={action.payload} onClose={() => setAction({ name: null, payload: null }) } />
        </Box>
    );
}

const UpdateImage = async (playlist, file) => {
    const res = await request(`api/playlists/${playlist.id}/photo`, "POST", { photo: file });

    if (res.ok) {
        window.location.reload();
    }
}

const remove = async (playlist, track, onRemoved) => {
    const res = await request(`api/playlists/${playlist.id}/tracks/${track.id}`, "DELETE");

    if (res.ok) {
        onRemoved();
    }
}

export default ShowPlaylistPage;