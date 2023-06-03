import { Box } from "@mui/material";
import React from "react";
import request, { APP_URL } from "../utils/Request";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Playlist from "../components/Playlist/Playlist";
import { usePlaylists } from "../contexts/PlaylistsContext";
import AddToPlaylistCard from "../components/Cards/AddToPlaylistCard";
import { usePlayer } from "../contexts/PlayerContext";
import PlaylistBanner from "../components/Playlist/PlaylistBanner";



const ShowPlaylistPage = ({ album }) => {
    const { data } = useLoaderData();
    const [tracks, setTracks] = React.useState([]);
    const { user } = useAuth();
    const { setPlaylists } = usePlaylists();
    const [action, setAction] = React.useState({ name: null, payload: null });
    const { addTrack } = usePlayer();

    return (
        <Box sx={{ width: "100%" }}>
            <PlaylistBanner 
                avatar={`${APP_URL}api/playlists/${data.id}/photo`}
                enableEdit={data.user.username == user.username}
                onAvatarChange={(file) => UpdateImage(data, file)}
                onChange={(newData) => setPlaylists(ps => {
                    ps[ps.findIndex(v => v.id == data.id)] = newData;
                    return [...ps];
                })}
                playlist={data}
                tracks={tracks}
                type="playlist"
            />

            <Playlist
                tracks={tracks}
                setTracks={setTracks}
                album={album}
                onAddTrack={() => handleAction(data, "Add track", null)}
                playlist={data}
                dataUrl={`api/playlists/${data.id}/tracks`}
                enableEdit={data.user.username == user.username}
                actions={["Remove from this playlist", "Add to playlist", "Add to queue"]}
                onAction={(action, track) => handleAction(data, action, track, setAction, remove, setTracks, addTrack)}
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

const remove = async (playlist, track, setTracks) => {
    const res = await request(`api/playlists/${playlist.id}/tracks/${track.id}`, "DELETE");

    if (res.ok) {
        setTracks(ts => ts.filter(v => v.id != track.id))
    }
}

const handleAction = (playlist, action, track, setAction, remove, setTracks, addTrack) => {
    switch(action)
    {
        case "Add to playlist": setAction({ name: action, payload: track }); break;
        case "Remove from this playlist": remove(playlist, track, setTracks); break;
        case "Add track": setAction({ name: action, payload: null }); break;
        case "Add to queue": addTrack(track); break;
    }
}

export default ShowPlaylistPage;