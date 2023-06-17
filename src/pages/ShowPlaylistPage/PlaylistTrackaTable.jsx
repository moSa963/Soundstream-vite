import React from "react";
import Playlist from "../../components/Playlist/Playlist";
import AddToPlaylistCard from "../../components/Dialogs/AddToPlaylistCard";
import { usePlayer } from "../../contexts/PlayerContext";
import { useMessage } from "../../contexts/MessageContext";



const PlaylistTrackaTable = ({ playlist, setPlaylist }) => {
    const [action, setAction] = React.useState({ name: null, payload: null });
    const { addTrack } = usePlayer();
    const {setInfo, setError} = useMessage();


    return (
        <React.Fragment>
            <Playlist stickyHeader
                url={`api/playlists/${playlist.id}/tracks`}
                playlist={playlist}
                setPlaylist={setPlaylist}
                actions={["Remove from this playlist", "Add to playlist", "Add to queue"]}
                onAction={(action, track, setTracks) => handleAction(playlist, action, track, setError, setInfo, setAction, remove, setTracks, addTrack)}
            />

            <AddToPlaylistCard open={action.name == "Add to playlist"}  track={action.payload} onClose={() => setAction({ name: null, payload: null }) } />
        </React.Fragment>
    );
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

export default PlaylistTrackaTable;