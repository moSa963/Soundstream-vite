import { Box } from "@mui/material";
import React from "react";
import { APP_URL } from "../utils/Request";
import Playlist from "../components/Playlist";
import AddToPlaylistCard from "../components/AddToPlaylistCard";


const LikesPage = () => {
    const [action, setAction] = React.useState({ name: null, payload: null });
    const [tracks, setTracks] = React.useState([]);

    const handleAction = (action, track) => {
        switch(action)
        {
            case "Add to playlist": setAction({ name: action, payload: track });
        }
    }

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
                onAction={handleAction}
            />

            <AddToPlaylistCard open={action.name == "Add to playlist"}  track={action.payload} onClose={() => setAction({ name: null, payload: null }) } />
        </Box>
    );
}

export default LikesPage;