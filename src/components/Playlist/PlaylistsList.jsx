import React from "react";
import CardsSection from "../CardsSection/CardsSection";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import PlaylistCard from "../../components/CardsSection/PlaylistCard";
import PlaylistsStack from "./PlaylistsStack";
import HorizontalList from "../HorizontalList";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';


const PlaylistsList = ({ playlists, setPlaylists }) => {
    const [view, setView] = React.useState('cards');


    return (
        <Box sx={{ width: "100%" }}>
            <HorizontalList end noWrap>
                <ToggleButtonGroup
                    size="small"
                    value={view}
                    exclusive
                    onChange={(_, v) => setView(v)}
                >
                    <ToggleButton value="cards" aria-label="module">
                        <ViewModuleIcon />
                    </ToggleButton>
                    <ToggleButton value="stack" aria-label="list">
                        <ViewListIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </HorizontalList>
            {
                view === "stack" ? <PlaylistsStack playlists={playlists} setPlaylists={setPlaylists} /> : <CardsSection Card={PlaylistCard} data={playlists} />
            }
        </Box>
    );
}


export default PlaylistsList;