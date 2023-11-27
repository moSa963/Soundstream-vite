import { Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
import { APP_URL } from "../../utils/Request";


const UserCard = ({ data }) => {

    return (
        <Card src={`${APP_URL}api/account/${data.username}/profile/photo/${data.photo}`} to={`/user/${data.username}`}>
            <Typography noWrap >{data?.name}</Typography>
            <Typography variant="caption" color="gray" fontFamily="serif">@{data?.username}</Typography>
        </Card>
    );
}


export default UserCard;