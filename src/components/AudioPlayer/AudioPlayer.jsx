import { Box, Paper, Stack } from "@mui/material";
import React from "react";
import Track from "../Track";
import PlayerController from "./PlayerController";
import PlayerButtons from "./PlayerButtons";
import ProgressLine from "./ProgressLine";



const AudioPlayer = ({ track, onForward, onBackward }) => {
    const audioRef = React.useRef(new Audio());
    const [options, setOptions] = React.useState({});

    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = track?.src;
            audioRef.current.play().catch(() => {});
        }
    }, [audioRef.current, track]);

    React.useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        const onEnded = (e) => {
            if (options?.repeat == "one"){
                e.target.currentTime = 0;
                e.target.play().catch(() => {});
                return;
            }

            if (options?.repeat == "list"){
                onForward && onForward(true)
                return;
            }
        }

        audioRef.current.addEventListener('ended', onEnded);

        return () => {
            audioRef.current.removeEventListener('ended', onEnded);
        };
    }, [audioRef.current, options?.repeat]);

    return (
        <Paper sx={{ display: "flex", width: "100%", overflow: 'hidden', height: 100, borderRadius: 0, borderTop: "1px solid", borderColor: "divider" }} elevation={2}>
            <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                <Track track={track}/>
            </Box>

            <Stack justifyContent="center" alignItems="center" sx={{ flex: 2, width: "100%", maxWidth: 450 }}>
                <PlayerButtons 
                    audio={audioRef} 
                    options={options} 
                    onOptionChange={setOptions} 
                    onForward={() => onForward && onForward()} 
                    onBackward={() => onBackward && onBackward()} />

                <ProgressLine audio={audioRef} />
            </Stack>

            <Box sx={{ flex: 1, display: "flex", justifyContent: "end", alignItems: "center" }}>
                <PlayerController audio={audioRef} />
            </Box>
        </Paper>
    );
}

export default AudioPlayer;