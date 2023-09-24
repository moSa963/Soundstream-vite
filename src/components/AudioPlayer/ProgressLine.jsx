import { Slider, Stack, Typography } from "@mui/material";
import React from "react";
import formatTime from "../../utils/formatTime";



const ProgressLine = ({ audio, onCurrentTimeChange, noLabels }) => {
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
        onCurrentTimeChange && onCurrentTimeChange(currentTime);
    }, [onCurrentTimeChange, currentTime])

    return (
        <Stack spacing={1} justifyContent="center" alignItems="center" direction="row" sx={{ width: "100%" }}>
            {!noLabels && <Typography variant="caption" color="gray">{formatTime(currentTime)}</Typography>}
            <Slider
                size="small"
                value={currentTime}
                max={audio?.current?.duration || 0}
                min={0}
                step={.016}
                onChange={(_, value) => { audio.current.currentTime = value; }}
                sx={{
                    width: "100%",
                    color: '#fff',
                    height: 4,
                    '& .MuiSlider-thumb': {
                        width: 8,
                        height: 8,
                        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                        '&:before': {
                            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                        },
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: `0px 0px 0px 8px rgb(255 255 255 / 16%)`
                        },
                        '&.Mui-active': {
                            width: 15,
                            height: 15,
                        },
                    },
                    '& .MuiSlider-rail': {
                        opacity: 0.28,
                    },
                }}
            />
            {!noLabels && <Typography variant="caption" color="gray">{formatTime(audio?.current?.duration)}</Typography>}
        </Stack >
    );
}

export default ProgressLine;