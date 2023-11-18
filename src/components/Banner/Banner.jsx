import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import AvatarInput from "../AvatarInput";
import Edit from "@mui/icons-material/Edit";
import BannerBase from "./BannerBase";



const Banner = ({ description, title, type, avatar, onEdit, onAvatarChange, color, children }) => {

    return (
        <BannerBase color={color} >

            <AvatarInput src={avatar}
                disabled={!onAvatarChange}
                sx={{ width: { xs: 150, sm: 220 }, height: { xs: 150, sm: 200 }, boxShadow: t => t.shadows[4] }}
                onChange={onAvatarChange}
            />

            <Stack spacing={2} sx={{ overflow: "hidden", px: { xs: 1, sm: 5 }, pt: 2, width: "100%" }}>
                <Typography variant="caption" color="gray">{type}</Typography>
                <Typography variant="h2" noWrap sx={{ fontSize: { xs: 20, sm: 30, md: 50 } }}>{title}</Typography>
                <Typography sx={{ fontSize: { xs: 10, sm: 15, md: 20 }, color: "gray", wordBreak: "break-word" }} >{description}</Typography>
                {children}
            </Stack>

            {
                onEdit &&
                <IconButton onClick={onEdit} sx={{ position: "absolute", top: 20, right: 0 }}>
                    <Edit />
                </IconButton>
            }
        </BannerBase>
    );
}


export default Banner;