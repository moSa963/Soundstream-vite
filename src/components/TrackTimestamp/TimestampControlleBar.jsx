import { IconButton, Stack } from "@mui/material";
import React from "react";
import PlayButton from "../../components/AudioPlayer/PlayButton";
import ForwardIcon from "@mui/icons-material/ArrowForward";
import BackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const TimestampControlleBar = ({ audio, onAdd, onRemove, onBackward, onForward }) => {


    return (
        <Stack width="100%" direction="row" justifyContent="space-evenly">
            <Stack width="100%" direction="row" justifyContent="space-evenly">
                <IconButton size="small"
                    onClick={onAdd}>
                    <AddIcon />
                </IconButton>
                <IconButton size="small"
                    onClick={onRemove}>
                    <RemoveIcon />
                </IconButton>
            </Stack>
            <Stack width="100%" direction="row" justifyContent="space-evenly">
                <IconButton size="small"
                    onClick={onBackward}>
                    <BackIcon />
                </IconButton>
                <PlayButton audio={audio} />
                <IconButton size="small"
                    onClick={onForward}>
                    <ForwardIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
}


export default TimestampControlleBar;