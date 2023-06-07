import React from "react";
import request from "../../utils/Request";
import LikeButton from "../LikeButton";
import { useMessage } from "../../contexts/MessageContext";



const LikeTrackButton = ({ track, setLiked }) => {
    const {setError} = useMessage();

    return (
        <LikeButton liked={track?.liked} setLiked={() => like(track, setLiked, setError)}/>
    );
}

const like = async (track, setLiked, setError) => {
    try {
        await request(`api/likes/tracks/${track?.id}`, track?.liked ? "DELETE" : "POST");
        setLiked(!track?.liked);
    }
    catch (error) {
        setError(error);
    }
}

export default LikeTrackButton;