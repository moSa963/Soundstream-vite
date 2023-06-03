import { Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import { APP_URL } from "../../utils/Request";


const PlaylistCard = ({ data }) => {

    return (
        <Card src={`${APP_URL}api/playlists/${data.id}/photo`} to={`/library/playlists/${data.id}`}>
            <Typography noWrap >{data?.title}</Typography>
            <Typography variant="caption" color="gray" fontFamily="serif">{data?.description}</Typography>
        </Card>
    );
}


export default PlaylistCard;