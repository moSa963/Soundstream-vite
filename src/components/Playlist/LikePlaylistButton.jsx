import React from "react";
import request from "../../utils/Request";
import LikeButton from "../LikeButton";


const LikePlaylistButton = ({ playlist, setLiked }) => {


    return (
        <LikeButton liked={playlist?.liked} setLiked={() => like(playlist, setLiked)}/>
    );
}

const like = async (playlist, setLiked) => {
    const res = await request(`api/likes/playlists/${playlist?.id}`, playlist?.liked ? "DELETE" : "POST");

    if (res.ok)
    {
        setLiked(!playlist?.liked);
    }
}

export default LikePlaylistButton;