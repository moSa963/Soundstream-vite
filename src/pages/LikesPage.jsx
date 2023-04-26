import { Box } from "@mui/material";
import React from "react";
import PlaylistBanner from "../components/PlaylistBanner";
import TracksTable from "../components/TracksTable/TracksTable";
import request, { APP_URL } from "../utils/Request";


const LikesPage = () => {
    const [tracks, setTracks] = React.useState([]);

    React.useEffect(() => {
        loadData(setTracks);
    }, []);

    return (
        <Box sx={{ width: "100%" }} >
            <PlaylistBanner type="playlist" title="Liked Songs" avatar={`${APP_URL}img/likes.png`}/>
            <TracksTable tracks={tracks} setTracks={setTracks}/>
        </Box>
    );
}

const loadData = async (setData) => {
    const res = await request("api/likes");

    if (res.ok){
        const js = await res.json();
        setData(js.data);
    }
}

export default LikesPage;