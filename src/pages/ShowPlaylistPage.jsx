import { Box } from "@mui/material";
import React from "react";
import TracksTable from "../components/TracksTable/TracksTable";
import PlaylistBanner from "../components/PlaylistBanner";
import request, { APP_URL } from "../utils/Request";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";



const ShowPlaylistPage = () => {
    const { data } = useLoaderData();
    const [tracks, setTracks] = React.useState([]);
    const { user } = useAuth();

    React.useEffect(() => {
        setTracks([]);
        loadTracks(data, setTracks);
    }, [data]);

    return (
        <Box sx={{ width: "100%" }}>
            <PlaylistBanner
                playlistId={data.id}
                enableEdit={data.user.username == user.username}
                title={data.title}
                description={data.description}
                type={"playlist"}
                onAvatarChange={(file) => UpdateImage(data, file)}
                avatar={`${APP_URL}api/playlists/${data.id}/photo`} />
            <TracksTable tracks={tracks} setTracks={setTracks} />
        </Box>
    );
}

const loadTracks = async (playlist, setData) => {
    const res = await request(`api/playlists/${playlist.id}/tracks`);

    if (res.ok) {
        const js = await res.json();
        setData(js.data);
    }
}

const UpdateImage = async (playlist, file) => {
    const res = await request(`api/playlists/${playlist.id}/photo`, "POST", { photo: file});

    if (res.ok) {
        window.location.reload();
    }
}

export default ShowPlaylistPage;