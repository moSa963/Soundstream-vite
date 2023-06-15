import { Box } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner/Banner";
import UpdatePlaylistCard from "../Dialogs/UpdatePlaylistCard";
import PlaylistInfo from "./PlaylistInfo";



const PlaylistBanner = ({ playlist, enableEdit, type, avatar, onAvatarChange, onChange }) => {
    const [editOpen, setEditOpen] = React.useState(false);

    return (
        <Box sx={{ width: "100%" }}>
            <Banner
                title={playlist.title}
                description={playlist.description}
                type={type}
                onEdit={enableEdit && (() => setEditOpen(true))}
                onAvatarChange={onAvatarChange}
                avatar={avatar}
            >
                <PlaylistInfo user={playlist?.user} trackCount={playlist?.tracks_count} isPrivate={playlist.private}/>
            </Banner>

            <UpdatePlaylistCard
                playlist={playlist}
                onChange={onChange}
                open={editOpen}
                setOpen={setEditOpen}
            />
        </Box>
    );
}


export default PlaylistBanner;