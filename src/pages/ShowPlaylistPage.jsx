import { Box } from "@mui/material";
import React from "react";
import TracksTable from "../components/TracksTable/TracksTable";
import PlaylistBanner from "../components/PlaylistBanner";
import request, { APP_URL } from "../utils/Request";
import { useLoaderData } from "react-router-dom";



const ShowPlaylistPage = () => {
    const { data } = useLoaderData();
    const [tracks, setTracks] = React.useState([]);
    
    React.useEffect(() => {
        setTracks([]);
        loadTracks(data, setTracks);
    }, [data]);

    return (
        <Box sx={{ width: "100%" }}>
            <PlaylistBanner title={data.title} description={data.description} type={"playlist"} avatar={`${APP_URL}api/playlists/${data.id}/photo`}/>
            <TracksTable tracks={tracks} setTracks={setTracks}/>
        </Box>
    );
}

const loadTracks = async (playlist, setData) => {
    const res = await request(`api/playlists/${playlist.id}/tracks`);

    if (res.ok){
        const js = await res.json();
        setData(js.data);
    }
}
export default ShowPlaylistPage;