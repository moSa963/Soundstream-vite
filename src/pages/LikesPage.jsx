import { Box } from "@mui/material";
import React from "react";
import { APP_URL } from "../utils/Request";
import Playlist from "../components/Playlist";
import AddToPlaylistCard from "../components/Cards/AddToPlaylistCard";
import { usePlayer } from "../contexts/PlayerContext";


const LikesPage = () => {
    const [action, setAction] = React.useState({ name: null, payload: null });
    const [tracks, setTracks] = React.useState([]);
    const { setList } = usePlayer();

    return (
        <Box sx={{ width: "100%" }} >
            <Playlist 
                tracks={tracks}
                setTracks={setTracks}
                type="playlist"
                playlist={{ title: "Liked Songs", }}
                dataUrl="api/likes"
                avatar={`${APP_URL}img/likes.png`}
                actions={["Add to playlist", "Add to queue"]}
                onAction={(action, track) => handleAction(action, track, setAction, setList)}
            />

            <AddToPlaylistCard open={action.name == "Add to playlist"}  track={action.payload} onClose={() => setAction({ name: null, payload: null }) } />
        </Box>
    );
}

const handleAction = (action, track, setAction, setList) => {
    switch(action)
    {
        case "Add to playlist": setAction({ name: action, payload: track }); break;
        case "Add to queue": setList(list => [...list, track]); break;
    }
}

export default LikesPage;