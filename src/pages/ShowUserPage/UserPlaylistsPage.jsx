import { Box } from "@mui/material";
import React from "react";
import CardsSection from "../../components/CardsSection/CardsSection";
import { useOutletContext } from "react-router-dom";
import PlaylistCard from "../../components/CardsSection/PlaylistCard";
import PaginationList from "../../components/PaginationList";


const UserPlaylistsPage = () => {
    const { user } = useOutletContext();

    return (
        <Box sx={{ width: "100%" }}>
            <PaginationList
                url={`api/users/${user?.username}/playlists?count=2`}
                loader={
                    (list, setList, loadNext) => (
                        <CardsSection onShowAll={loadNext}
                            Card={PlaylistCard}
                            data={list}
                        />
                    )
                }
            />
        </Box>
    );
}


export default UserPlaylistsPage;