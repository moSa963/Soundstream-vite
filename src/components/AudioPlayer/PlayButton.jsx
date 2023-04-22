import React from "react";
import Pause from "@mui/icons-material/Pause";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import { IconButton } from "@mui/material";



const PlayButton = ({ audio }) => {
    const [paused, setPaused] = React.useState(true);

    React.useEffect(() => {
        if (audio?.current == null) {
            return;
        }

        const onPlaying = (e) => setPaused(false);
        const onPaused = (e) => setPaused(true);

        audio.current.addEventListener('playing', onPlaying);
        audio.current.addEventListener('pause', onPaused);

        return () => {
            audio.current.removeEventListener('playing', onPlaying);
            audio.current.removeEventListener('pause', onPaused);
        };
    }, [audio?.current]);

    const handleClick = () => {
        if (!audio.current) {
            return;
        }

        paused ? audio.current.play() : audio.current.pause(); 
    }
    
    return (
        <IconButton onClick={handleClick}
            size="medium" sx={{ border: "1px solid", borderColor: "primary.light" }}>
            {paused ? <PlayArrowRounded /> : <Pause />}
        </IconButton>
    );
}


export default PlayButton;