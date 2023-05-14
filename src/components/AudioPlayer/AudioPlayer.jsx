import { Box, Paper, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import Track from "../Track/Track";
import PlayerController from "./PlayerController";
import PlayerButtons from "./PlayerButtons";
import ProgressLine from "./ProgressLine";
import { APP_URL } from "../../utils/Request";



const AudioPlayer = ({ track, onForward, onBackward }) => {
    const audioRef = React.useRef(new Audio());
    const [options, setOptions] = React.useState({});
    const isSmall = useMediaQuery('(max-width:700px)');


    React.useEffect(() => {
        if (audioRef.current && track) {
            audioRef.current.src = `${APP_URL}api/tracks/${track.id}/stream`;
            audioRef.current.play().catch(() => { });
        }

        return () => {
            audioRef.current && (audioRef.current.src = "");
        };
    }, [audioRef.current, track]);

    React.useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        const onEnded = (e) => {
            if (options?.repeat == "one") {
                e.target.currentTime = 0;
                e.target.play().catch(() => { });
                return;
            }

            if (options?.repeat == "list") {
                onForward && onForward(Boolean(options?.shuffle))
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
            <Box sx={{ flex: isSmall ? 2 : 1, display: "flex", overflow: "hidden", justifyContent: "start", alignItems: "center" }}>
                <Track track={track} small={isSmall}/>
            </Box>

            <Box sx={{ flex: isSmall ? 1 : 2, display: "flex", flexDirection: "column", overflow: "hidden", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: "100%", maxWidth: 600 }}>
                    <PlayerButtons
                        simple={isSmall}
                        audio={audioRef}
                        options={options}
                        onOptionChange={setOptions}
                        onForward={() => onForward && onForward(options?.shuffle)}
                        onBackward={() => onBackward && onBackward()} />

                    {!isSmall && <ProgressLine audio={audioRef} />}
                </Box>
            </Box>

            {
                !isSmall &&
                <Box sx={{ flex: 1, display: "flex", overflow: "hidden", justifyContent: "end", alignItems: "center" }}>
                    <PlayerController audio={audioRef} />
                </Box>
            }
        </Paper>
    );
}


export default AudioPlayer;