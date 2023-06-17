import { Box } from "@mui/material";
import React from "react";
import CardsSection from "../components/CardsSection/CardsSection";
import { useNavigate } from "react-router-dom";
import { usePlaylists } from "../contexts/PlaylistsContext";
import PlaylistCard from "../components/CardsSection/PlaylistCard";
import PaginationList from "../components/PaginationList";
import CardsSectionSkeleton from "../components/CardsSection/CardsSectionSkeleton";
import TrackCard from "../components/CardsSection/TrackCard";



const HomePage = () => {
    const nav = useNavigate();
    const { playlists } = usePlaylists();

    return (
        <Box sx={{ width: "100%" }}>

            <CardsSection
                title="Your Playlists"
                onAction={() => nav("/library/playlists")}
                actionTitle="ShowAll"
                Card={PlaylistCard}
                data={playlists.filter((v, i) => !v.album).filter((_, i) => i < 6)}
            />

            <PaginationList
                url="api/likes?count=6"
                Skeleton={CardsSectionSkeleton}
                loader={(data) => (
                    <CardsSection
                        title="Liked Tracks"
                        onAction={() => nav("/likes")}
                        actionTitle="ShowAll"
                        Card={TrackCard}
                        data={data}
                    />
                )}
            />

            <CardsSection
                title="Albums"
                onAction={() => nav("/library/albums")}
                actionTitle="ShowAll"
                Card={PlaylistCard}
                data={playlists.filter(v => v.album).filter((_, i) => i < 4)}
            />
        </Box>
    );
}


export default HomePage;