import { Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import { APP_URL } from "../../utils/Request";
import { usePlayer } from "../../contexts/PlayerContext";


const TrackCard = ({ data }) => {
    const { addTrack, playTrack } = usePlayer();

    const handlePlay = () => {
        addTrack(data);
        playTrack(data);
    }

    return (
        <Card src={`${APP_URL}api/tracks/${data.id}/photo`} onClick={handlePlay}>
            <Typography noWrap >{data?.title}</Typography>
            <Typography variant="caption" color="gray" fontFamily="serif">@{data?.user.username}</Typography>
        </Card>
    );
}


export default TrackCard;