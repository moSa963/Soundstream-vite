import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import TracksTable from "../../components/TracksTable/TracksTable";
import request from "../../utils/Request";
import { usePlayer } from "../../contexts/PlayerContext";
import PlaylistToolsBar from "./PlaylistToolsBar";


const Playlist = ({ tracks, setTracks, playlist, setPlaylist, dataUrl, actions, onAction }) => {
    const [filter, setFilter] = React.useState("");
    const { setIndices, setList } = usePlayer();
    const isSmall = useMediaQuery('(max-width:600px)');

    React.useEffect(() => {
        setTracks([]);
        loadTracks(dataUrl, setTracks);
    }, [playlist?.id, dataUrl, setTracks]);

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
                onAction={onAction} />
        </Box>
    );
}

const loadTracks = async (dataUrl, setData) => {
    const res = await request(dataUrl);

    if (res.ok) {
        const js = await res.json();
        setData(js.data);
    }
}

export default Playlist;