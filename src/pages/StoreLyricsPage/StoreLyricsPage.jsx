import { Box, Button, Divider, LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import AddLyricsForm from "./AddLyricsForm";
import TrackTimestamp from "../../components/TrackTimestamp/TrackTimestamp";
import LyricsViewer from "../../components/LyricsViewer";
import request, { APP_URL } from "../../utils/Request";
import formatTime from "../../utils/formatTime";
import { useMessage } from "../../contexts/MessageContext";


const StoreLyricsPage = () => {
    const track = useRouteLoaderData("track_root");
    const audioRef = React.useRef(new Audio());
    const [lyrics, setLyrics] = React.useState(null);
    const [currentTime, setCurrentTime] = React.useState(null);
    const [stamps, setStamps] = React.useState([]);
    const { setInfo } = useMessage();

    React.useEffect(() => {
        loadData(track.data, setLyrics, setStamps);
    }, [track.data]);

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

    if (lyrics === null) {
        return <LinearProgress />
    }

    if (lyrics === "") {
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
                seekTime={handleSeekTime}
                current={currentTime}
                stamps={stamps}
                lyrics={lyrics} />

            <Divider sx={{ mb: 1 }} />

            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography>{formatTime(currentTime)}</Typography>
                <Button variant="contained" onClick={() => save(track.data, lyrics, stamps, setInfo)}>Save</Button>
            </Stack>

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

const loadData = async (track, setLyrics, setStamps) => {
    try {
        const res = await request(`api/lyrics/tracks/${track.id}`);
        const js = await res.json();

        setLyrics(js.data.lyrics);
        const stamps = js.data.timestamps.split(",");
        return setStamps(js.data.timestamps.length == 0 ? [] : stamps);
    } catch {
        setLyrics("");
        setStamps([]);
    }
}

const save = async (track, lyrics = "", stamps = [], setInfo) => {
    var data = {
        "lyrics": lyrics,
    };

    if (stamps && stamps.length > 0) {
        data["timestamps"] = stamps.join(',');
    }

    const res  = await request(`api/lyrics/tracks/${track.id}`, "POST", data);

    if (res.ok) {
        setInfo("Lyrics had been updated successfully");
    }
}

export default StoreLyricsPage;