import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import { APP_URL } from "../utils/Request";
import { PlayArrowRounded } from "@mui/icons-material";
import UpdateTrackCard from "../components/Dialogs/UpdateTrackCard";



const ShowTrackPage = () => {
    const { data } = useLoaderData();
    const [editOpen, setEditOpen] = React.useState(false);


    return (
        <Box sx={{ width: "100%" }}>
            <Banner
                avatar={`${APP_URL}api/tracks/${data.id}/photo`}
                title={data.title}
                onEdit={() => setEditOpen(true)}
                description={`@${data.user.username}`}
                type="track"
            />

            <UpdateTrackCard
                track={data}
                onChange={() => {}}
                setTracks={() => {}}
                open={editOpen}
                setOpen={setEditOpen}
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