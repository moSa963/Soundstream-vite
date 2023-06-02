import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import TracksTable from "../../components/TracksTable/TracksTable";
import Banner from "../../components/Banner/Banner";
import request from "../../utils/Request";
import { usePlayer } from "../../contexts/PlayerContext";
import UpdatePlaylistCard from "../Cards/UpdatePlaylistCard";
import PlaylistToolsBar from "./PlaylistToolsBar";
import PlaylistInfo from "./PlaylistInfo";



const Playlist = ({ tracks, setTracks, playlist, enableEdit, type, dataUrl, avatar, onAvatarChange, actions, onAction, onChange, album }) => {
    const [filter, setFilter] = React.useState("");
    const [editOpen, setEditOpen] = React.useState(false);
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
            <Banner
                title={playlist.title}
                description={playlist.description}
                type={type}
                onEdit={enableEdit && (() => setEditOpen(true))}
                onAvatarChange={onAvatarChange}
                avatar={avatar}
                AdditionalInfo={<PlaylistInfo user={playlist?.user} trackCount={tracks.length}/>}
            />

            <UpdatePlaylistCard
                playlist={playlist}
                onChange={onChange}
                open={editOpen}
                setOpen={setEditOpen}
            />

            <PlaylistToolsBar
                playlist={playlist}
                onTrackAdded={(t) => setTracks(ts => [...ts, t])}
                filter={filter}
                setFilter={setFilter}
                enableUpload={enableEdit && album}
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