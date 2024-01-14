import { Button, Divider, Stack, Typography } from "@mui/material";
import React from "react"
import LyricsViewer from "../../components/LyricsViewer";
import TrackTimestamp from "../../components/TrackTimestamp/TrackTimestamp";
import formatTime from "../../utils/formatTime";


const SyncLyrics = ({ audio, onTimeChange, stamps, setStamps, lyrics, onSave }) => {
    const [currentTime, setCurrentTime] = React.useState(null);
d


    return (
        <Stack sx={{ width: "100%", height: "90%"}} >
            <LyricsViewer
                flex={1}
                seekTime={onTimeChange}
                current={currentTime}
                stamps={stamps}
                lyrics={lyrics} />

            <Divider sx={{ mb: 1 }} />

            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography>{formatTime(currentTime)}</Typography>
                <Button variant="contained" onClick={onSave}>Save</Button>
            </Stack>

            <Divider sx={{ my: 1 }} />

            <TrackTimestamp
                stamps={stamps}
                setStamps={setStamps}
                audio={audio}
                setCurrentTime={onTimeChange}
                currentTime={currentTime}
                onCurrentTimeChange={setCurrentTime}
                max={audio?.current.duration} />
        </Stack>
    );
}



export default SyncLyrics;