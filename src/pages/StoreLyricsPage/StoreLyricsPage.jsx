import { LinearProgress, Stack } from "@mui/material";
import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import AddLyricsForm from "./AddLyricsForm";
import request, { APP_URL } from "../../utils/Request";
import { useMessage } from "../../contexts/MessageContext";
import SyncLyrics from "./SyncLyrics";


const StoreLyricsPage = () => {
    const track = useRouteLoaderData("track_root");
    const audioRef = React.useRef(new Audio());
    const [lyrics, setLyrics] = React.useState(null);
    const [stamps, setStamps] = React.useState([]);
    const [edit, setEdit] = React.useState(false);
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

    if (lyrics === "" || edit) {
        return (
            <Stack sx={{ width: "100%", height: "85%", alignItems: "center" }} spacing={2}>
                <AddLyricsForm 
                defaultVal={lyrics}
                onAdded={(data) => {
                    setLyrics(data);
                    setEdit(false);
                }} />
            </Stack>
        );
    }

    return (
        <SyncLyrics 
            audio={audioRef}
            lyrics={lyrics}
            stamps={stamps}
            setStamps={setStamps}
            onTimeChange={handleSeekTime}
            onEdit={() => setEdit(true)}
            onSave={() => save(track.data, lyrics, stamps, setInfo)}
        />
    )
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