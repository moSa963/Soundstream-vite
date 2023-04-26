import { Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import { APP_URL } from "../../utils/Request";
import { useNavigate } from "react-router-dom";


const PlaylistCard = ({ data }) => {
    const nav = useNavigate();

    return (
        <Card src={`${APP_URL}api/playlists/${data.id}/photo`} onClick={() => nav(`/playlist/${data.id}`)}>
            <Typography noWrap >{data?.title}</Typography>
            <Typography variant="caption" color="gray" fontFamily="serif">{data?.description}</Typography>
        </Card>
    );
}


export default PlaylistCard;