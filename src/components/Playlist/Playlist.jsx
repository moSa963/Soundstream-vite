import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import TracksTable from "../../components/TracksTable/TracksTable";
import { usePlayer } from "../../contexts/PlayerContext";
import PlaylistToolsBar from "./PlaylistToolsBar";
import PaginationList from "../PaginationList";


const Playlist = ({ url, playlist, setPlaylist, actions, onAction, stickyHeader }) => {
    const [filter, setFilter] = React.useState("");
    const { setIndices, setList } = usePlayer();
    const small = useMediaQuery('(max-width:600px)');


    const handlePlay = (_, index, setList) => {
        setList(tracks); 
        setIndices([index]);
    }

    return (
        <PaginationList
            url={url}
            loader={(list, next, setTracks) => (
                <Box sx={{ width: "100%" }}>
                    <PlaylistToolsBar
                        playlist={playlist}
                        onTrackAdded={(t) => setTracks(ts => [...ts, t])}
                        filter={filter}
                        setPlaylist={setPlaylist}
                        setFilter={setFilter}
                    />

                    <TracksTable
                        simple={small}
                        onPlay={(_, index) => handlePlay(_, index, setList)}
                        tracks={list?.filter((v) => v.title.toLowerCase().startsWith(filter.toLowerCase()))}
                        setTracks={setTracks}
                        actions={actions}
                        onAction={(action, track) => onAction(action, track, setTracks)}
                        stickyHeade={stickyHeader}
                    />
                </Box>
            )}
        />
    );
}

export default Playlist;