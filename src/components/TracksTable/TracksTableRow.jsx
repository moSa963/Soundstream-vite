import { FavoriteBorderRounded, FavoriteRounded, PlayCircle } from "@mui/icons-material";
import { Box, IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import Track from "../Track/Track";
import LikeTrackButton from "../Track/LikeTrackButton";


const TracksTableRow = ({ track, index, setLiked }) => {
    const [hover, setHover] = React.useState(false);

    return (
        <TableRow
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer", ":hover": { bgcolor: t => t.palette.action.hover } }}
        >
            <TableCell  component="th" scope="row">
                <Box sx={{ width: 40, overflow: "hidden" }}>
                    {

                        hover ? <IconButton ><PlayCircle /></IconButton> : index + 1
                    }
                </Box>
            </TableCell>
            <TableCell align="left" sx={{ maxWidth: 300, overflow: "hidden" }}><Track small track={track}/></TableCell>
            <TableCell align="right">{track.album?.title || '-'}</TableCell>
            <TableCell align="right">{new Date(track.created_at).toLocaleDateString()}</TableCell>
            <TableCell align="right"><LikeTrackButton track={track} setLiked={setLiked}/></TableCell>
            <TableCell align="right">{track.duration}</TableCell>
        </TableRow>
    );
}



export default TracksTableRow;