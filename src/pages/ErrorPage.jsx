import { Box } from "@mui/system";
import React from "react";
import { Button, Icon, Stack, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorPage = () => {
    const nav = useNavigate();
    const error = useRouteError();

    
    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "background.default",
                color: "secondary.dark",
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
                    <ErrorOutlineIcon sx={{ width: 150, height: 150 }} />
                </Icon>
                <Stack spacing={1} >
                    <Typography>{error.status}</Typography>
                    <Typography variant="h5">{error.statusText}</Typography>
                    <Button variant="text" onClick={() => nav(-1)}>GO BACK</Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default ErrorPage;
