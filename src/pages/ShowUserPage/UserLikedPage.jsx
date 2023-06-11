import React from "react";
import TrackCard from "../../components/CardsSection/TrackCard";
import CardsSection from "../../components/CardsSection/CardsSection";
import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import PaginationList from "../../components/PaginationList";
import CardsSectionSkeleton from "../../components/CardsSection/CardsSectionSkeleton";



const UserLikedPage = () => {
    const { user } = useOutletContext();

    return (
        <Box sx={{ width: "100%" }}>
            <PaginationList
                url={`api/likes?username=${user?.username}`}
                Skeleton={CardsSectionSkeleton}
                loader={
                    (list, setList, loadNext) => (
                        <CardsSection
                            Card={TrackCard}
                            data={list}
                        />
                    )
                }
            />
        </Box>
    );
}


export default UserLikedPage;