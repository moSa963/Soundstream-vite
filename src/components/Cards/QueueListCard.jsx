import React from "react";
import { usePlayer } from "../../contexts/PlayerContext"
import CardBase from "./CardBase";
import { Typography } from "@mui/material";
import TracksTable from "../TracksTable/TracksTable";


const QueueListCard = ({ open, setOpen }) => {
    const { list, setList, setIndices } = usePlayer();

    return (
        <CardBase open={open} setOpen={setOpen} maxHeight={500} >
            <Typography sx={{ width: "100%" }} variant="h4">Queue</Typography>

            <TracksTable 
                tracks={list}
                setTracks={setList}
                onPlay={(_, i) => setIndices([i])}
                simple
                actions={["Remove from queue", ]}
                onAction={(a, t) => handleAction(a, t, setList)}
            />
        </CardBase>
    );
}

const handleAction = (action, track, setList) => {
    switch (action) {
        case "Remove from queue": setList(l => l.filter(v => v.id != track.id)); break;
    }
}

export default QueueListCard;