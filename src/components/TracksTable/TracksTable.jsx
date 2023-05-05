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


const TracksTable = ({ tracks, setTracks, actions, onAction, simple }) => {
    const { setIndices, setList } = usePlayer();

    const handleSetLiked = (track, liked) => {
        track.liked = liked;
        setTracks(t => [...t]);
    }

    const handlePlay = (_, index) => {
        setList(tracks);
        setIndices([index]);
    }

    return (
        <TableContainer component={Paper} sx={{ width: "100%" }}>
            <Table sx={{ width: "100%", "& td": { padding: .5 } }} size="small" >
                <TableHead>
                    <TableRow>
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
