import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TracksTableRow from "./TracksTableRow";
import { Timelapse } from "@mui/icons-material";
import { usePlayer } from "../../contexts/PlayerContext";



const TracksTable = ({ tracks, setTracks, actions, onAction }) => {
    const { setIndex, setList } = usePlayer();

    const handleSetLiked = (track, liked) => {
        track.liked = liked;
        setTracks(t => [...t]);
    }

    const handlePlay = (_, index) => {
        setList(tracks);
        setIndex(index);
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell width={40} >#</TableCell>
                        <TableCell >Title</TableCell>
                        <TableCell align="right">Album</TableCell>
                        <TableCell align="right">Date added</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"><Timelapse /></TableCell>
                        <TableCell width={40}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tracks?.map((track, index) =>
                        <TracksTableRow key={track?.id}
                            track={track}
                            onPlay={handlePlay}
                            index={index}
                            setLiked={(v) => handleSetLiked(track, v)}
                            actions={actions}
                            onAction={onAction}
                        />
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



export default TracksTable;
