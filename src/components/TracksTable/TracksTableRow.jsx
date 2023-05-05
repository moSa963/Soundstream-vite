import { PlayCircle } from "@mui/icons-material";
import { Box, IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import Track from "../Track/Track";
import LikeTrackButton from "../Track/LikeTrackButton";
import TracksTableRowList from "./TracksTableRowList";
import { Link } from "react-router-dom";


const TracksTableRow = ({ track, index, setLiked, onPlay, actions, onAction, simple }) => {
    const [hover, setHover] = React.useState(false);

    return (
        <TableRow
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer", ":hover": { bgcolor: t => t.palette.action.hover }, padding: 0 }}
        >
            <TableCell component="th">
                <Box sx={{ width: 20 }}>
                    {

                        hover ? <IconButton onClick={() => onPlay(track, index)} size="small"><PlayCircle /></IconButton> : index + 1
                    }
                </Box>
            </TableCell>

            <TableCell align="left" sx={{ maxWidth: 150, overflow: "hidden" }}>
                <Track small track={track} />
            </TableCell>

            {
                !simple && <TableCell align="center">
                    {track.album ? <Link to={`/library/${track.album?.id}`}>{track.album?.title}</Link> : '-'}
                </TableCell>
            }

            {
                !simple && <TableCell align="center">
                    {new Date(track.created_at).toLocaleDateString()}
                </TableCell>}
            {
                !simple && <TableCell align="center">
                    <LikeTrackButton track={track} setLiked={setLiked} />
                </TableCell>
            }

            {
                !simple && <TableCell align="center">
                    {track.duration}
                </TableCell>
            }

            <TableCell sx={{ width: 5, overflow: "hidden" }} align="center">
                <Box sx={{ width: 35 }}>
                    {hover && <TracksTableRowList actions={actions} onActionClick={(a) => onAction(a, track)} />}
                </Box>
            </TableCell>
        </TableRow>
    );
}



export default TracksTableRow;