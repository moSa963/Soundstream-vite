import { Box, Stack } from "@mui/material";
import React from "react";
import ProgressLine from "../AudioPlayer/ProgressLine";
import Stamp from "./Stamp";
import TimestampControlleBar from "./TimestampControlleBar";


const TrackTimestamp = ({ max = 100, audio, onCurrentTimeChange, currentTime, setCurrentTime, stamps, setStamps }) => {
    const [zoom, setZoom] = React.useState(100);

    const handleWheel = (e) => {
        setZoom(v => {
            var newV = v - (e.deltaY / 2);

            if (newV > 2000) {
                newV = 2000;
            }

            return newV < 100 ? 100 : newV;
        });
    }

    const handleBackward = () => {
        const i = getIndex(stamps, currentTime) - 1;

        seekIndex(i);
    }

    const handleForward = () => {
        const i = getIndex(stamps, currentTime) + 1;

        seekIndex(i);
    }

    const seekIndex = (index) => {
        var i = index;

        if (i >= stamps.length) {
            i = stamps.length - 1;
        }

        audio.current.currentTime = stamps[i < 0 ? 0 : i] || 0;
    }

    const handleAdd = () => {
        const i = getIndex(stamps, currentTime);

        if (i > 0 && currentTime == stamps[i - 1]) {
            return;
        }

        stamps.splice(i, 0, currentTime);
        setStamps([...stamps]);
    }

    const handleRemove = () => {
        const i = stamps.findIndex(e => e == currentTime);

        if (i == -1) {
            return;
        }

        stamps.splice(i, 1);
        setStamps([...stamps]);
    }

    return (
        <Stack sx={{ width: "100%" }}>
            <Box sx={{ width: "100%", overflow: "hidden", px: 2 }} onWheel={handleWheel}>
                <Box sx={{ width: `${zoom}%`, height: 50, position: "relative", display: 'flex', alignItems: "end" }}>
                    {
                        stamps.map((e, i) =>
                            <Stamp key={i}
                                offset={(e / max) * 100}
                                time={e} selected={currentTime == e}
                                onClick={() => setCurrentTime && setCurrentTime(e)} />)
                    }
                    <ProgressLine noLabels audio={audio} onCurrentTimeChange={(v) => onCurrentTimeChange(v && parseFloat(v.toFixed(1)))} />
                </Box>
            </Box>

            <TimestampControlleBar
                audio={audio}
                onAdd={handleAdd}
                onRemove={handleRemove}
                onBackward={handleBackward}
                onForward={handleForward}
            />
        </Stack>
    );
}


const getIndex = (arr, current) => {
    for (var i = 0; i < arr.length; ++i) {
        if (current < arr[i]) {
            return i;
        }
    }
    return arr.length;
}
export default TrackTimestamp;