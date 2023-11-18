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
            loader={(loader) => (
                <Box sx={{ width: "100%", ...sx }}>
                    <PlaylistToolsBar
                        playlist={playlist}
                        onTrackAdded={(t) => loader.setList(ts => [...ts, t])}
                        filter={filter}
                        setPlaylist={setPlaylist}
                        setFilter={setFilter}
                    />
                    <TracksTable
                        simple={small}
                        onPlay={(_, index) => handlePlay(loader.list, index, setList)}
                        tracks={loader.list?.filter((v) => v.title.toLowerCase().startsWith(filter.toLowerCase()))}
                        setTracks={loader.setList}
                        actions={actions}
                        onAction={(action, track) => onAction(action, track, loader.setList)}
                        stickyHeader={stickyHeader}
                    />
                </Box>
            )}
        />
    );
}

export default Playlist;