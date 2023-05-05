import React from "react";
import { IconButton, Stack } from "@mui/material";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import RepeatButton from "./RepeatButton";
import ShuffleButton from "./ShuffleButton";
import PlayButton from "./PlayButton";



const PlayerButtons = ({ audio, onOptionChange, options, onBackward, onForward, simple }) => {

    const handleRewind = () => {
        audio.current.currentTime = 0;
    }

    return (
        <Stack spacing={simple ? .5 : 1} justifyContent="center" alignItems="center" direction="row" sx={{ width: "100%" }}>
            {!simple && <ShuffleButton setOptions={onOptionChange} shuffle={options?.shuffle} />}

            <IconButton size="small"
                sx={{ border: "1px solid", borderColor: "divider" }}
                onClick={handleRewind}
                onDoubleClick={onBackward}>
                <FastRewindRounded />
            </IconButton>

            <PlayButton audio={audio} />

            <IconButton size="small"
                sx={{ border: "1px solid", borderColor: "divider" }}
                onClick={onForward} >
                <FastForwardRounded />
            </IconButton>

            {!simple && <RepeatButton repeat={options?.repeat} setOptions={onOptionChange} />}
        </Stack>
    );
}


export default PlayerButtons;