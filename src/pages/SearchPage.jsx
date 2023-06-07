import { Box, Divider } from "@mui/material";
import React from "react";
import SearchBar from "../components/SearchBar";
import CardsSection from "../components/CardsSection/CardsSection";
import request from "../utils/Request";
import PlaylistCard from "../components/CardsSection/PlaylistCard";
import TrackCard from "../components/CardsSection/TrackCard";
import UserCard from "../components/CardsSection/UserCard";
import { useMessage } from "../contexts/MessageContext";


const SearchPage = () => {
    const [data, setData] = React.useState({});
    const {setError} = useMessage();

    
    const handleLoad = (key) => {
        loadData(key, setData, setError);
    }

    return (
        <Box sx={{ width: "100%", p: 2 }}>
            <SearchBar onSearch={handleLoad}/>

            <Divider sx={{ my: 5 }} />
        
            {Boolean(data?.tracks?.length)  && <CardsSection title="Tracks" Card={TrackCard} data={data?.tracks} noWrap/>}
            {Boolean(data?.albums?.length) && <CardsSection title="Albums" Card={PlaylistCard} data={data?.albums} noWrap/>}
            {Boolean(data?.playlists?.length) && <CardsSection title="Playlists" Card={PlaylistCard} data={data?.playlists} noWrap/>}
            {Boolean(data?.users?.length) && <CardsSection title="Users" Card={UserCard} data={data?.users} noWrap/>}
        </Box>
    );
}


const loadData = async (key, setData, setError) => {
    try {
        const res = await request(`api/search/${key}`)
        const js = await res.json();
        setData(js.data);
    }
    catch (error) {
        setError(error);
    }
}

export default SearchPage;