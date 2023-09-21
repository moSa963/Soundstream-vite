import { Box } from "@mui/material";
import React from "react";
import request, { APP_URL } from "../../utils/Request";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { usePlaylists } from "../../contexts/PlaylistsContext";
import PlaylistBanner from "../../components/Playlist/PlaylistBanner";
import { useMessage } from "../../contexts/MessageContext";
import PlaylistTrackaTable from "./PlaylistTrackaTable";



const ShowPlaylistPage = () => {
    const { data } = useLoaderData();
    const [playlist, setPlaylist] = React.useState({});
    const { user } = useAuth();
    const { setPlaylists } = usePlaylists();
    const {setError} = useMessage();

    return (
        <Box sx={{ width: "100%" }}>
            <PlaylistBanner 
                type="playlist"
                playlist={{...data, ...playlist}}
                avatar={`${APP_URL}api/playlists/${data.id}/photo/${data.image}`}
                enableEdit={data.user.username == user.username}
                onAvatarChange={(file) => UpdateImage(data, file, setError)}
                onChange={(newData) => setPlaylists(ps => {
                    ps[ps.findIndex(v => v.id == data.id)] = newData;
                    setPlaylist(newData);
                    return [...ps];
                })}
            />

            <PlaylistTrackaTable 
                playlist={{...data, ...playlist}}
                setPlaylist={setPlaylist}
            />
        </Box>
    );
}

const UpdateImage = async (playlist, file, setError) => {
    try {
        await request(`api/playlists/${playlist.id}/photo`, "POST", { photo: file });
        window.location.reload();
    }
    catch (error) {
        setError(error);
    }
}


export default ShowPlaylistPage;