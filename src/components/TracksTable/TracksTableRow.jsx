import { PlayCircle } from "@mui/icons-material";
import { Box, IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import Track from "../Track/Track";
import LikeTrackButton from "../Track/LikeTrackButton";
import TracksTableRowList from "./TracksTableRowList";


const TracksTableRow = ({ track, index, setLiked, onPlay, actions, onAction }) => {
    const [hover, setHover] = React.useState(false);

    return (
        <TableRow
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer", ":hover": { bgcolor: t => t.palette.action.hover } }}
        >
            <TableCell component="th" scope="row">
                <Box sx={{ width: 5 }}>
                    {

                        hover ? <IconButton onClick={() => onPlay(track, index)} size="small"><PlayCircle /></IconButton> : index + 1
                    }
                </Box>
            </TableCell>
            <TableCell align="left" sx={{ maxWidth: 300, overflow: "hidden" }}><Track small track={track} /></TableCell>
            <TableCell align="right">{track.album?.title || '-'}</TableCell>
            <TableCell align="right">{new Date(track.created_at).toLocaleDateString()}</TableCell>
            <TableCell align="right"><LikeTrackButton track={track} setLiked={setLiked} /></TableCell>
            <TableCell align="right">{track.duration}</TableCell>
            <TableCell sx={{ minWidth: 70, overflow: "hidden" }}>
                {hover && <TracksTableRowList actions={actions} onActionClick={(a) => onAction(a, track)} />}
            </TableCell>
        </TableRow>
    );
}



export default TracksTableRow;