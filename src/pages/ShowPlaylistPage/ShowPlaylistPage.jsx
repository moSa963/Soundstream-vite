import { Box } from "@mui/material";
import React from "react";
import request, { APP_URL } from "../../utils/Request";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Playlist from "../../components/Playlist/Playlist";
import { usePlaylists } from "../../contexts/PlaylistsContext";
import AddToPlaylistCard from "../../components/Dialogs/AddToPlaylistCard";
import { usePlayer } from "../../contexts/PlayerContext";
import PlaylistBanner from "../../components/Playlist/PlaylistBanner";
import { useMessage } from "../../contexts/MessageContext";



const ShowPlaylistPage = () => {
    const { data } = useLoaderData();
    const [playlist, setPlaylist] = React.useState({});
    const { user } = useAuth();
    const { setPlaylists } = usePlaylists();
    const [action, setAction] = React.useState({ name: null, payload: null });
    const { addTrack } = usePlayer();
    const {setInfo, setError} = useMessage();


    React.useEffect(() => {
        setPlaylist(data);
    }, [data]);

    return (
        <Box sx={{ width: "100%" }}>
            <PlaylistBanner 
                type="playlist"
                playlist={playlist}
                avatar={`${APP_URL}api/playlists/${data.id}/photo`}
                enableEdit={data.user.username == user.username}
                onAvatarChange={(file) => UpdateImage(data, file, setError)}
                onChange={(newData) => setPlaylists(ps => {
                    ps[ps.findIndex(v => v.id == data.id)] = newData;
                    setPlaylist(newData);
                    return [...ps];
                })}
            />

            <Playlist stickyHeader
                url={`api/playlists/${data.id}/tracks`}
                playlist={playlist}
                setPlaylist={setPlaylist}
                actions={["Remove from this playlist", "Add to playlist", "Add to queue"]}
                onAction={(action, track, setTracks) => handleAction(data, action, track, setError, setInfo, setAction, remove, setTracks, addTrack)}
            />

            <AddToPlaylistCard open={action.name == "Add to playlist"}  track={action.payload} onClose={() => setAction({ name: null, payload: null }) } />
        </Box>
    );
}

const UpdateImage = async (playlist, file, setError) => {
    try {
        await request(`api/playlists/${playlist.id}/photo`, "POST", { photo: file });
        window.location.reload();
    }
    catch (error) {
        setError(error);
    }
}

const remove = async (playlist, track, setTracks, setInfo, setError) => {
    try {
        await request(`api/playlists/${playlist.id}/tracks/${track.id}`, "DELETE");
        setTracks(ts => ts.filter(v => v.id != track.id));
        setInfo("a track has been removed successfully");
    }
    catch (error) {
        setError(error);
    }
}

const handleAction = (playlist, action, track, setError, setInfo, setAction, remove, setTracks, addTrack) => {
    switch(action)
    {
        case "Add to playlist": setAction({ name: action, payload: track }); break;
        case "Remove from this playlist": remove(playlist, track, setTracks, setInfo, setError); break;
        case "Add to queue": addTrack(track); break;
    }
}

export default ShowPlaylistPage;