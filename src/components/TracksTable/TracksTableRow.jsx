import { FavoriteBorderRounded, FavoriteRounded, PlayCircle } from "@mui/icons-material";
import { Box, IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import Track from "../Track/Track";
import LikeTrackButton from "../Track/LikeTrackButton";


const TracksTableRow = ({ row, index }) => {
    const [hover, setHover] = React.useState(false);


    return (
        <TableRow
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer", ":hover": { bgcolor: t => t.palette.action.hover } }}
        >
            <TableCell  component="th" scope="row">
                <Box sx={{ width: 40, overflow: "hidden" }}>
                    {

                        hover ? <IconButton ><PlayCircle /></IconButton> : index + 1
                    }
                </Box>
            </TableCell>
            <TableCell  align="left" ><Track small /></TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">{row.created_at}</TableCell>
            <TableCell align="right"><LikeTrackButton /></TableCell>
            <TableCell align="right">{row.duration}</TableCell>
        </TableRow>
    );
}



export default TracksTableRow;