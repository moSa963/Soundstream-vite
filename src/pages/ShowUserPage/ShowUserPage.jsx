import { Box } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner/Banner";
import { APP_URL } from "../../utils/Request";
import { useLoaderData } from "react-router-dom";



const ShowUserPage = () => {
    const { data } = useLoaderData();

    return (
        <Box sx={{ width: "100%" }}>
            <Banner
                avatar={`${APP_URL}api/account/${data.username}/profile/photo`}
                title={data.name}
                description={`@${data.username}`}
                type="profile" 
            />

        </Box>
    );
}

export default ShowUserPage;