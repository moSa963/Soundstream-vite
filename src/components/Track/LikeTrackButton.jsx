import React from "react";
import request from "../../utils/Request";
import LikeButton from "../LikeButton";



const LikeTrackButton = ({ track, setLiked }) => {


    return (
        <LikeButton liked={track?.liked} setLiked={() => like(track, setLiked)}/>
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