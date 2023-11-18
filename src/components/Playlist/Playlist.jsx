import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import TracksTable from "../../components/TracksTable/TracksTable";
import { usePlayer } from "../../contexts/PlayerContext";
import PlaylistToolsBar from "./PlaylistToolsBar";
import PaginationList from "../PaginationList";
import TracksTableSkeleton from "../TracksTable/TracksTableSkeleton";


const Playlist = ({ url, playlist, setPlaylist, actions, onAction, stickyHeader, sx }) => {
    const [filter, setFilter] = React.useState("");
    const { setIndices, setList } = usePlayer();
    const small = useMediaQuery('(max-width:600px)');

    const handlePlay = (tracks, index, setList) => {
        setList(tracks);
        setIndices([index]);
    }

    return (
        <PaginationList
            url={url}
            Skeleton={TracksTableSkeleton}
            payload={playlist}
            loader={({ list, setTracks }) => (
                <Box sx={{ width: "100%", ...sx }}>
                    <PlaylistToolsBar
                        playlist={playlist}
                        onTrackAdded={(t) => setTracks(ts => [...ts, t])}
                        filter={filter}
                        setPlaylist={setPlaylist}
                        setFilter={setFilter}
                    />
                    <TracksTable
                        simple={small}
                        onPlay={(_, index) => handlePlay(list, index, setList)}
                        tracks={list?.filter((v) => v.title.toLowerCase().startsWith(filter.toLowerCase()))}
                        setTracks={setTracks}
                        actions={actions}
                        onAction={(action, track) => onAction(action, track, setTracks)}
                        stickyHeader={stickyHeader}
                    />
                </Box>
            )}
        />
    );
}

export default Playlist;