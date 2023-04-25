import { Favorite, FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import request from "../../utils/Request";



const LikeTrackButton = ({ track, setLiked }) => {


    return (
        <IconButton title="like" onClick={() => like(track, setLiked)}>
            {track?.liked ? <Favorite /> : <FavoriteBorder /> }
        </IconButton>
    );
}

const like = async (track, setLiked) => {
    const res = await request(`api/likes/tracks/${track?.id}`, track?.liked ? "DELETE" : "POST");

    if (res.ok)
    {
        setLiked(!track?.liked);
    }
}

export default LikeTrackButton;