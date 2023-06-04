import { Box, Chip } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner/Banner";
import { APP_URL } from "../../utils/Request";
import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";
import HorizontalList from "../../components/HorizontalList";



const ShowUserPage = () => {
    const { data } = useLoaderData();
    const { pathname } = useLocation();
    const route = pathname.split("/").filter(v => v != '').at(-1);

    
    return (
        <Box sx={{ width: "100%" }}>
            <Banner
                avatar={`${APP_URL}api/account/${data.username}/profile/photo`}
                title={data.name}
                description={`@${data.username}`}
                type="profile"
            />

            <Box sx={{ p: 1 }}>
                <HorizontalList noWrap spacing={1} >
                    <Link to={tabs[0]}><Chip label="Albums" clickable variant={route === data.username? "filled" : "outlined"} /></Link>
                    <Link to={tabs[1]}><Chip label="Liked Tracks" clickable variant={route === tabs[1] ? "filled" : "outlined"} /></Link>
                    <Link to={tabs[2]}><Chip label="Playlists" clickable variant={route == tabs[2] ? "filled" : "outlined"} /></Link>
                </HorizontalList>
            </Box>

            <Outlet context={{user: data}}/>
        </Box>
    );
}

const tabs = [
    "",
    "liked",
    "playlists",
]

export default ShowUserPage;