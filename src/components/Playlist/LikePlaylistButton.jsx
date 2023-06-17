import React from "react";
import request from "../../utils/Request";
import LikeButton from "../LikeButton";
import { useMessage } from "../../contexts/MessageContext";


const LikePlaylistButton = ({ playlist, setLiked, large }) => {
    const {setError} = useMessage();

    return (
        <LikeButton liked={playlist?.liked} setLiked={() => like(playlist, setLiked, setError)} large={large}/>
    );
}

const like = async (playlist, setLiked, setError) => {
    try {
        await request(`api/likes/playlists/${playlist?.id}`, playlist?.liked ? "DELETE" : "POST");
        setLiked(!playlist?.liked);
    }
    catch (error) {
        setError(error);
    }
}

export default LikePlaylistButton;