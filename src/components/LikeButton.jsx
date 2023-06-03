import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";


const LikeButton = ({ liked, setLiked }) => {


    return (
        <IconButton title="like" onClick={() => setLiked(!liked)}>
            {liked ? <Favorite /> : <FavoriteBorder /> }
        </IconButton>
    );
}

export default LikeButton;