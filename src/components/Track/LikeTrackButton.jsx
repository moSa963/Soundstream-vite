import { Favorite, FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";



const LikeTrackButton = ({ track }) => {


    return (
        <IconButton title="like" onClick={() => like(track)}>
            {track?.liked ? <Favorite /> : <FavoriteBorder /> }
        </IconButton>
    );
}

const like = async (track) => {
    
}

export default LikeTrackButton;