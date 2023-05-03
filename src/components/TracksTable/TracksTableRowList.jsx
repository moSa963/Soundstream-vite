import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const TracksTableRowList = ({ actions, onActionClick }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment >
            <IconButton size='small'
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <MoreHorizIcon />
            </IconButton>
            <Menu sx={{ zIndex: 99999 }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {actions?.map(
                    (v, i) => (
                        <MenuItem key={i}
                            onClick={() => {
                                handleClose();
                                onActionClick(v);
                            }}>{v}</MenuItem>
                    ))}
            </Menu>
        </React.Fragment>
    );
}


export default TracksTableRowList;