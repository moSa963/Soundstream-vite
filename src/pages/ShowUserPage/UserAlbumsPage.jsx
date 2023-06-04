import React from "react";
import CardsSection from "../../components/CardsSection/CardsSection";
import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import PlaylistCard from "../../components/CardsSection/PlaylistCard";
import PaginationList from "../../components/PaginationList";



const UserAlbumsPage = () => {
    const { user } = useOutletContext();

    return (
        <Box sx={{ width: "100%" }}>
            <PaginationList
                url={`api/users/${user?.username}/albums`}
                loader={
                    (list, setList, loadNext) => (
                        <CardsSection
                            Card={PlaylistCard}
                            data={list}
                        />
                    )
                }
            />
        </Box>
    );
}


export default UserAlbumsPage;