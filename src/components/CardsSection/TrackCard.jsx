import { Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import { APP_URL } from "../../utils/Request";


const TrackCard = ({ data }) => {

    return (
        <Card src={`${APP_URL}api/tracks/${data.id}/photo`} to={`/track/${data.id}`}>
            <Typography noWrap >{data?.title}</Typography>
            <Typography variant="caption" color="gray" fontFamily="serif">@{data?.user.username}</Typography>
        </Card>
    );
}


export default TrackCard;