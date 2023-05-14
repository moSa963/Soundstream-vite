import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";
import PlaylistBanner from "../components/PlaylistBanner";
import { APP_URL } from "../utils/Request";
import { PlayArrow, PlayArrowOutlined, PlayArrowRounded } from "@mui/icons-material";



const ShowTrackPage = () => {
    const { data } = useLoaderData();

    return (
        <Box sx={{ width: "100%" }}>
            <PlaylistBanner
                avatar={`${APP_URL}api/tracks/${data.id}/photo`}
                title={data.title}
                description={`@${data.user.username}`}
                type="track"
            />

            <Box sx={{ width: "100%", p: 2 }}>
                <Stack direction="row">
                    <IconButton size="large" color="success" sx={{ width: 75, height: 75, border: "1px solid" }} title="play">
                        <PlayArrowRounded sx={{ width: 75, height: 75 }} />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box>
                        <Typography >created at: {new Date(data.created_at).toLocaleDateString()}</Typography>
                    </Box>
                </Stack>
            </Box>

        </Box>
    );
}

export default ShowTrackPage;