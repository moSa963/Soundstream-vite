import React from "react";
import { Backdrop, IconButton, Paper, Typography } from "@mui/material";
import LyricsIcon from "@mui/icons-material/LyricsOutlined";
import LyricsViewer from "../LyricsViewer";
import request from "../../utils/Request";



const ShowLyricsCard = ({ track, audio }) => {
    const [open, setOpen] = React.useState(false);
    const [lyrics, setLyrics] = React.useState(null);
    const [stamps, setStamps] = React.useState([]);
    const [currentTime, setCurrentTime] = React.useState(null);

    React.useEffect(() => {
        if (audio?.current == null) {
            return;
        }

        const timeupdate = (e) => {
            setCurrentTime(audio?.current?.currentTime);
        }

        audio.current.addEventListener('timeupdate', timeupdate);
        audio.current.addEventListener('loadedmetadata', timeupdate);

        return () => {
            audio.current.removeEventListener('timeupdate', timeupdate);
            audio.current.removeEventListener('loadedmetadata', timeupdate);
        };
    }, [audio?.current]);

    React.useEffect(() => {
        getData(track, setLyrics, setStamps);
    }, [track]);

    return (
        <React.Fragment>
            <IconButton size="small" onClick={() => setOpen(true)}>
                <LyricsIcon />
            </IconButton>

            <Backdrop open={open} onClick={() => setOpen(false)} sx={{ zIndex: 10000, margin: "0px !important" }}>
                <Paper sx={{ width: "100%", height: "100%", maxWidth: 650, maxHeight: 650, p: 5, border: t => `1px solid ${t.palette.primary.light}`, borderTopRightRadius: 25, borderBottomLeftRadius: 25, }}>
                    {lyrics?.length > 0 && <LyricsViewer current={currentTime} lyrics={lyrics} stamps={stamps} />}
                </Paper>
            </Backdrop>

        </React.Fragment>
    );
}


const getData = async (track, setLyrics, setStamps) => {
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

export default ShowLyricsCard;