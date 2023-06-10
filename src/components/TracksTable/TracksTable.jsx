import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TracksTableRow from "./TracksTableRow";
import { Timelapse } from "@mui/icons-material";


const TracksTable = ({ tracks, setTracks, actions, onAction, simple, onPlay, stickyHeader }) => {
    const handleSetLiked = (track, liked) => {
        track.liked = liked;
        setTracks(t => [...t]);
    }

    return (
        <Table sx={{ width: "100%", "& td": { padding: .5 } }} size="small" stickyHeader={stickyHeader}>
            <TableHead sx={{ position: stickyHeader ? "sticky" : "static", top: 45, zIndex: 2 }}>
                <TableRow  > 
                    <TableCell >#</TableCell>
                    <TableCell width="100%">Title</TableCell>
                    {!simple && <TableCell align="center">Album</TableCell>}
                    {!simple && <TableCell align="center">Date added</TableCell>}
                    {!simple && <TableCell align="center"></TableCell>}
                    {!simple && <TableCell align="center"><Timelapse /></TableCell>}
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tracks?.map((track, index) =>
                    <TracksTableRow key={track?.id} 
                        simple={simple}
                        track={track}
                        onPlay={onPlay}
                        index={index}
                        setLiked={(v) => handleSetLiked(track, v)}
                        actions={actions}
                        onAction={onAction}
                    />
                )}
            </TableBody>
        </Table>
    );
}



export default TracksTable;
