import { Box, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import { APP_URL } from "../../utils/Request";
import { usePlayer } from "../../contexts/PlayerContext";
import PlayCircleIcon from '@mui/icons-material/PlayCircleFilled';
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
                p: 1,
                transition: "500ms",
                background: t => `linear-gradient(174deg, rgba(0,0,0,0) 10%, ${t.palette.background.paper} 100%)`,
                ":hover": {
                    opacity: 1,
                }
            }}>
                <IconButton onClick={handlePlay} size="small">
                    <Paper sx={{ backgroundColor: t=>t.palette.background.paper, borderRadius: 99999999999, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <PlayCircleIcon sx={{ width: 75, height: 75 }}/>
                    </Paper>
                </IconButton>
            </Box>
        </Card>
    );
}


export default TrackCard;