import { Box, Fab, Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import { APP_URL } from "../../utils/Request";
import { usePlayer } from "../../contexts/PlayerContext";
import PlayCircleIcon from '@mui/icons-material/PlayArrowOutlined';
import { useNavigate } from "react-router-dom";

const TrackCard = ({ data }) => {
    const { addTrack, playTrack } = usePlayer();
    const nav = useNavigate();

    const handlePlay = (e) => {
        e.stopPropagation();
        addTrack(data);
        playTrack(data);
    }

    return (
        <Card src={`${APP_URL}api/tracks/${data.id}/photo`} onClick={() => nav(`/track/${data.id}`)}>
            <Typography noWrap >{data?.title}</Typography>
            <Typography variant="caption" color="gray" fontFamily="serif">@{data?.user.username}</Typography>

            <Box sx={{
                position: "absolute",
                inset: "0 0 0 0",
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
                opacity: 0,
                p: 3,
                transition: "500ms",
                background: t => `linear-gradient(174deg, rgba(0,0,0,0) 10%, ${t.palette.background.paper} 100%)`,
                ":hover": {
                    opacity: 1,
                }
            }}>
                <Fab color="primary"  size="large"  onClick={handlePlay}>
                    <PlayCircleIcon sx={{ width: "100%", height: "100%" }}/>
                </Fab>
            </Box>
        </Card>
    );
}


export default TrackCard;