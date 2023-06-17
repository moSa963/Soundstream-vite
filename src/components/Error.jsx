import { Box } from "@mui/system";
import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';

const Error = ({ status, statusText, action, onAction, height, children, bgcolor }) => {
    const Icon = icons[parseInt(status)] || ErrorOutlineIcon;

    return (
        <Box
            sx={{
                width: "100%",
                height: height || "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: bgcolor || "background.default",
                color: "secondary.dark",
                overflow: "auto",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    width: "100%",
                    maxWidth: 500,
                    alignItems: "center",
                }}
            >
                <Icon sx={{ width: 150, height: 150 }}>
                    <Icon sx={{ width: 150, height: 150 }} />
                </Icon>
                <Stack spacing={1} >
                    {status && <Typography>{status}</Typography>}
                    {statusText && <Typography variant="h5">{statusText}</Typography>}
                    {action && <Button variant="text" onClick={onAction}>{action}</Button>}
                </Stack>
            </Box>
            {children}
        </Box>
    );
};

const icons = {
    403: SecurityIcon,
    404: SentimentDissatisfiedIcon,
    500: StorageIcon,
}

export default Error;
