import { InputBase, Stack } from "@mui/material";
import React from "react";
import UploadTrackCard from "../Cards/UploadTrackCard";


const PlaylistToolsBar = ({ filter, setFilter, enableUpload, onTrackAdded, playlist }) => {



    return (
        <Stack direction="row" sx={{ width: "100%", p: 2 }}>
            <InputBase
                value={filter}
                onChange={(e) => setFilter(e.currentTarget.value)}
                placeholder="Search..."
                sx={{ width: "100%", px: 2, fontSize: 20 }}
            />
            {
                enableUpload &&
                <UploadTrackCard album={playlist} onTrackAdded={onTrackAdded} />
            }
        </Stack>
    );
}

export default PlaylistToolsBar;