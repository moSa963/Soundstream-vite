import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";



const AccountPage = () => {
    const location = useLocation();
    const nav = useNavigate();

    return (
        <Box sx={{ width: "100%", pt: 2 }}>
            <Tabs
                value={tabs[location.pathname]}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
            >
                <Tab label="profile" onClick={() => nav("/account")}/>
            </Tabs>

            <Outlet />
        </Box>
    );
}

const tabs = {
    "/account": 0,
}

export default AccountPage;