import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import TracksTable from "../../components/TracksTable/TracksTable";
import request from "../../utils/Request";
import { usePlayer } from "../../contexts/PlayerContext";
import PlaylistToolsBar from "./PlaylistToolsBar";
import { useMessage } from "../../contexts/MessageContext";


const Playlist = ({ tracks, setTracks, playlist, setPlaylist, dataUrl, actions, onAction }) => {
    const [filter, setFilter] = React.useState("");
    const { setIndices, setList } = usePlayer();
    const isSmall = useMediaQuery('(max-width:600px)');
    const {setError} = useMessage();
    
    React.useEffect(() => {
        setTracks([]);
        loadTracks(dataUrl, setTracks, setError);
    }, [playlist?.id, dataUrl, setTracks, setError]);

    const handlePlay = (_, index) => {
        setList(tracks);
        setIndices([index]);
    }

    return (
        <Box sx={{ width: "100%" }}>
            <PlaylistToolsBar
                playlist={playlist}
                onTrackAdded={(t) => setTracks(ts => [...ts, t])}
                filter={filter}
                setPlaylist={setPlaylist}
                setFilter={setFilter}
            />

            <TracksTable 
                simple={isSmall}
                onPlay={handlePlay}
                tracks={tracks?.filter((v) => v.title.toLowerCase().startsWith(filter.toLowerCase()))}
                setTracks={setTracks}
                actions={actions}
                onAction={onAction} 
                stickyHeader />
        </Box>
    );
}

const loadTracks = async (dataUrl, setData, setError) => {
    try {
        const res = await request(dataUrl);
        const js = await res.json();
        setData(js.data);
    }
    catch (error) {
        setError(error);
    }
}

export default Playlist;