import { Box, InputBase, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import TracksTable from "../components/TracksTable/TracksTable";
import Banner from "../components/Banner";
import request from "../utils/Request";
import UploadTrackCard from "./Cards/UploadTrackCard";
import { usePlayer } from "../contexts/PlayerContext";
import UpdatePlaylistCard from "./Cards/UpdatePlaylistCard";



const Playlist = ({ tracks, setTracks, playlist, enableEdit, type, dataUrl, avatar, onAvatarChange, actions, onAction, onChange, album, onAddTrack }) => {
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
                enableEdit={enableEdit}
                title={playlist.title}
                description={playlist.description}
                type={type}
                onEdit={() => setEditOpen(true)}
                onAvatarChange={onAvatarChange}
                avatar={avatar} 
            />

            <UpdatePlaylistCard
                playlist={playlist}
                onChange={onChange}
                open={editOpen}
                setOpen={setEditOpen}
            />

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