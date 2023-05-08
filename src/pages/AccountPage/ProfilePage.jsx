import { Box } from "@mui/material";
import React from "react";
import PlaylistBanner from "../../components/PlaylistBanner";
import { useAuth } from "../../contexts/AuthContext";
import request, { APP_URL } from "../../utils/Request";



const ProfilePage = () => {
    const { user } = useAuth();


    return (
        <Box sx={{ width: "100%" }}>
            <PlaylistBanner
                avatar={`${APP_URL}api/account/${user.username}/profile/photo`}
                title={user.name}
                description={`@${user.username}`}
                onAvatarChange={(file) => UpdateImage(file)}
                type="profile" />
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