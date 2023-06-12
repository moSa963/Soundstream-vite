import { Box, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const MenuItemLink = ({ to, Icon, title, onClick, small}) => {

    return to ? <Link to={to}>{itemBody(Icon, title, onClick, small)}</Link> : itemBody(Icon, title, onClick, small);

}

export const itemBody = (Icon, title, onClick, small) => {

    return (
        <Box onClick={onClick} sx={{ width: "100%", cursor: "pointer", py: 1, px: 1, display: "flex", alignItems: "center", color: t => t.palette.text.secondary, ":hover": { color: t => t.palette.text.primary }, }} title={title}> 
            {
                Icon &&
                <ListItemIcon sx={{ color: "inherit", transition: "500ms all" }}>
                    <Icon fontSize="large"  />
                </ListItemIcon>
            }

            {title && <Typography noWrap variant={small ? "body2" : "body1"} sx={{ transition: "500ms all" }}>{title}</Typography>}
        </Box>
    );
}
export default MenuItemLink;