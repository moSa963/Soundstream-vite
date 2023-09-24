import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import AddLyricsForm from "./AddLyricsForm";
import TrackTimestamp from "../../components/TrackTimestamp/TrackTimestamp";
import LyricsViewer from "../../components/LyricsViewer";
import { APP_URL } from "../../utils/Request";
import formatTime from "../../utils/formatTime";


const StoreLyricsPage = () => {
    const track = useRouteLoaderData("track_root");
    const audioRef = React.useRef(new Audio());
    const [lyrics, setLyrics] = React.useState(null);
    const [currentTime, setCurrentTime] = React.useState(null);
    const [stamps, setStamps] = React.useState([]);

    React.useEffect(() => {
        if (audioRef.current && track) {
            audioRef.current.src = `${APP_URL}api/tracks/${track.data.id}/stream`;
        }

        return () => {
            audioRef.current && (audioRef.current.src = "");
        };
    }, [audioRef.current, track]);


    const handleSeekTime = (time) => {
        audioRef.current.currentTime = time;
    }

    const seekIndex = (index) => {
        var i = index;

        if (i >= stamps.length) {
            i = stamps.length - 1;
        }

        audioRef.current.currentTime = stamps[i < 0 ? 0 : i] || 0;
    }

    if (!lyrics) {
        return (
            <Stack sx={{ width: "100%", height: "85%", alignItems: "center" }} spacing={2}>
                <AddLyricsForm onAdded={(data) => setLyrics(data)} />
            </Stack>
        );
    }

    return (
        <Box sx={{ width: "100%", height: "90%", display: "flex", flexDirection: "column" }} >
            <LyricsViewer
                flex={1}
                onClick={(l, i) => seekIndex(i)}
                current={currentTime}
                stamps={stamps}
                lyrics={lyrics} />

            <Divider sx={{ mb: 1 }} />

            <Typography>{formatTime(currentTime)}</Typography>

            <Divider sx={{ my: 1 }} />

            <TrackTimestamp
                stamps={stamps}
                setStamps={setStamps}
                audio={audioRef}
                setCurrentTime={handleSeekTime}
                currentTime={currentTime}
                onCurrentTimeChange={setCurrentTime}
                max={audioRef?.current.duration} />
        </Box>
    );
}



export default StoreLyricsPage;