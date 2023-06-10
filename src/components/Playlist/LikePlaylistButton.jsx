import React from "react";
import request from "../../utils/Request";
import LikeButton from "../LikeButton";


const LikePlaylistButton = ({ playlist, setLiked, large }) => {


    return (
        <LikeButton liked={playlist?.liked} setLiked={() => like(playlist, setLiked)} large={large}/>
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