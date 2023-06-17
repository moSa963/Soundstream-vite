import React from "react";
import { useNavigate, useParams, useRouteError } from "react-router-dom";
import Error from "../../components/Error";
import { usePlaylists } from "../../contexts/PlaylistsContext";
import { useMessage } from "../../contexts/MessageContext";
import request from "../../utils/Request";



const ShowPlaylistErrorPage = () => {
    const nav = useNavigate();
    const error = useRouteError();
    const params = useParams();
    const { playlists, setPlaylists } = usePlaylists();
    const liked = React.useMemo(() => Boolean(playlists.find(v => v.id == params.id)), [params.id, playlists]);
    const {setError} = useMessage();
    
    return (
        <Error
            bgcolor="inherit"
            action={liked ? "Unlike this playlist" : "GO BACK"}
            height="fit-content"
            onAction={() => liked ? unlike(params?.id, setPlaylists, setError) : nav(-1)}
            status={error.status}
            statusText={error.statusText}
        />
    );
};

const unlike = async (id, setPlaylists, setError) => {
    try {
        await request(`api/likes/playlists/${id}`, "DELETE");
        setPlaylists(ps => ps.filter(v => v.id != id));
    }
    catch (error) {
        setError(error);
    }
}

export default ShowPlaylistErrorPage;
