import { Box } from "@mui/material";
import React from "react";
import CardsSection from "../../components/CardsSection/CardsSection";
import { useOutletContext } from "react-router-dom";
import PlaylistCard from "../../components/CardsSection/PlaylistCard";
import PaginationList from "../../components/PaginationList";
import PlaylistsList from "../../components/Playlist/PlaylistsList";


const UserPlaylistsPage = () => {
    const { user } = useOutletContext();

    return (
        <Box sx={{ width: "100%" }}>
            <PaginationList 
                url={`api/users/${user?.username}/playlists?count=2`}
                loader={
                    (list, next, setList, loadNext) => (
                        <PlaylistsList
                            playlists={list}
                            setPlaylists={setList}
                        />
                    )
                }
            />
        </Box>
    );
}


export default UserPlaylistsPage;