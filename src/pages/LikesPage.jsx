import { Box } from "@mui/material";
import React from "react";
import { APP_URL } from "../utils/Request";
import Playlist from "../components/Playlist";
import AddToPlaylistCard from "../components/Cards/AddToPlaylistCard";


const LikesPage = () => {
    const [action, setAction] = React.useState({ name: null, payload: null });
    const [tracks, setTracks] = React.useState([]);

    return (
        <Box sx={{ width: "100%" }} >
            <Playlist 
                tracks={tracks}
                setTracks={setTracks}
                type="playlist"
                playlist={{ title: "Liked Songs", }}
                dataUrl="api/likes"
                avatar={`${APP_URL}img/likes.png`}
                actions={["Add to playlist"]}
                onAction={(action, track) => handleAction(action, track, setAction)}
            />

            <AddToPlaylistCard open={action.name == "Add to playlist"}  track={action.payload} onClose={() => setAction({ name: null, payload: null }) } />
        </Box>
    );
}

const handleAction = (action, track, setAction) => {
    switch(action)
    {
        case "Add to playlist": setAction({ name: action, payload: track });
    }
}

export default LikesPage;