import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const TracksTableRowList = ({ actions, onActionClick }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton size='small'
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <MoreHorizIcon />
            </IconButton>
            <Menu

                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {
                    actions?.map((v, i) =>
                        <MenuItem key={i}
                            onClick={() => {
                                handleClose();
                                onActionClick(v);
                            }}>{v}</MenuItem>)
                }
            </Menu>
        </Box>
    );
}


export default TracksTableRowList;