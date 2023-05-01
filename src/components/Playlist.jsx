import { Box, InputBase, Stack } from "@mui/material";
import React from "react";
import TracksTable from "../components/TracksTable/TracksTable";
import PlaylistBanner from "../components/PlaylistBanner";
import request from "../utils/Request";
import UploadTrackCard from "./Cards/UploadTrackCard";



const Playlist = ({ tracks, setTracks, playlist, enableEdit, type, dataUrl, avatar, onAvatarChange, actions, onAction, onChange, album, onAddTrack }) => {
    const [filter, setFilter] = React.useState("");

    React.useEffect(() => {
        setTracks([]);
        loadTracks(dataUrl, setTracks);
    }, [playlist?.id, dataUrl, setTracks]);

    return (
        <Box sx={{ width: "100%" }}>
            <PlaylistBanner
                playlistId={playlist?.id}
                enableEdit={enableEdit}
                title={playlist.title}
                description={playlist.description}
                type={type}
                onChange={onChange}
                onAvatarChange={onAvatarChange}
                avatar={avatar} />

            <Stack direction="row" sx={{ width: "100%", p: 2 }}>
                <InputBase
                    value={filter}
                    onChange={(e) => setFilter(e.currentTarget.value)}
                    placeholder="Search..."
                    sx={{ width: "100%", px: 2, fontSize: 20 }}
                />
                {
                    enableEdit && album && <UploadTrackCard album={playlist} onTrackAdded={(t) => setTracks(ts => [...ts, t])} />
                }
            </Stack>

            <TracksTable
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