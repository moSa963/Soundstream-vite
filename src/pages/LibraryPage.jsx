import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CardsSection from "../components/CardsSection/CardsSection";
import { Link, useNavigate } from "react-router-dom";
import { usePlaylists } from "../contexts/PlaylistsContext";
import PaginationList from "../components/PaginationList";
import TrackCard from "../components/CardsSection/TrackCard";
import CardsSectionSkeleton from "../components/CardsSection/CardsSectionSkeleton";
import HorizontalList from "../components/HorizontalList";
import CreateAlbumCard from "../components/Dialogs/CreateAlbumCard";



const LibraryPage = () => {
    const nav = useNavigate();
    const { setPlaylists } = usePlaylists();

    const handleAlbumAdded = (p) => {
        setPlaylists(ps => [...ps, p]);
        nav(`/library/albums/${p.id}`);
    }

    return (
        <Box sx={{ width: "100%" }}>
            <HorizontalList  >
                <CreateAlbumCard onAlbumAdded={handleAlbumAdded}/>        
                <Button fullWidth onClick={() => nav("/library/playlists")}>
                    <Typography>Playlists</Typography>
                </Button>
                <Button fullWidth onClick={() => nav("/library/albums")}>
                    <Typography>Albums</Typography>
                </Button>
            </HorizontalList>

            <PaginationList
                url="api/history/tracks"
                Skeleton={CardsSectionSkeleton}
                loader={({list}) => (
                    <CardsSection
                        key={list?.track}
                        title="Recently Played"
                        Card={TrackCard}
                        data={list?.track}
                    />
                )}
            />

        </Box>
    );
}


export default LibraryPage;