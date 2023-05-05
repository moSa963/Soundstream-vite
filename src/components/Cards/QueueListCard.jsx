import React from "react";
import { usePlayer } from "../../contexts/PlayerContext"
import CardBase from "./CardBase";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TracksTableRow from "../TracksTable/TracksTableRow";
import { Typography } from "@mui/material";


const QueueListCard = ({ open, setOpen }) => {
    const { list, setList, setIndices } = usePlayer();

    return (
        <CardBase open={open} setOpen={setOpen} maxHeight={500} >
            <Typography sx={{ width: "100%" }} variant="h4">Queue</Typography>
            <TableContainer component={Paper} sx={{ width: "100%" }}>
                <Table size="small" sx={{ width: "100%" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list?.map((track, index) =>
                            <TracksTableRow key={index}
                                small
                                track={track}
                                onPlay={(_, i) => setIndices([i])}
                                index={index}
                                setLiked={(v) => { }}
                                actions={["Remove from queue", ]}
                                onAction={(a, t) => handleAction(a, t, setList, index)}
                            />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardBase>
    );
}

const handleAction = (action, track, setList, index) => {
    switch (action) {
        case "Remove from queue": setList(l => l.filter((_, i) => i != index)); break;
    }
}

export default QueueListCard;