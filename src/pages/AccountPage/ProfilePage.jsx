import { Box, Button, Divider, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import { useAuth } from "../../contexts/AuthContext";
import request, { APP_URL } from "../../utils/Request";



const ProfilePage = () => {
    const { user } = useAuth();


    return (
        <Box sx={{ width: "100%" }}>
            <Banner
                avatar={`${APP_URL}api/account/${user.username}/profile/photo`}
                title={user.name}
                description={`@${user.username}`}
                onAvatarChange={(file) => UpdateImage(file)}
                type="profile" />

            <Box sx={{ p: 3 }}>
                <Stack spacing={2} sx={{ width: "100%", alignItems: "end" }}>
                    <TextField fullWidth size="small" placeholder="Name..." value={user.name} onChange={(e) => {}} label="Name" />

                    <TextField fullWidth size="small" placeholder="Username..." value={user.username} onChange={(e) => {}} label="Username" />

                    <Button onClick={() => {}}>Update</Button>

                    <Divider flexItem />
                <Button color="error">LOGOUT</Button>
                </Stack>

            </Box>
        </Box>
    );
}


const UpdateImage = async (file) => {
    const res = await request(`api/account/profile/photo`, "POST", { photo: file });

    if (res.ok) {
        window.location.reload();
    }
}

export default ProfilePage;