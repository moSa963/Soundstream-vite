import { Box } from "@mui/material";
import React from "react";
import CardsSection from "../components/CardsSection/CardsSection";
import CreateAlbumCard from "../components/Dialogs/CreateAlbumCard";
import request from "../utils/Request";
import AlbumCard from "../components/CardsSection/AlbumCard";


const LibraryPage = () => {
    const [albums, setAlbums] = React.useState([]);

    React.useEffect(() => {
        loadData(setAlbums);
    }, []);

    return (
        <Box sx={{ width: "100%", pt: 3 }}>
            <CreateAlbumCard onAlbumAdded={(v) => setAlbums(as => [...as, v])}/>
            <CardsSection title="Your albums" Card={AlbumCard} data={albums} />
        </Box>
    );
}

const loadData = async (setAlbums) => {
    const res = await request("api/albums");

    if (res.ok)
    {
        const js = await res.json();
        setAlbums(js.data);
    }
}

export default LibraryPage;