import { Divider, Skeleton, Stack } from "@mui/material";
import React from "react";



const TracksTableSkeleton = () => {


    return (
        <Stack spacing={1} sx={{ width: "100%", py: 5 }}>
            <Skeleton variant="rounded"/>
            <Divider />
            <Skeleton variant="rounded"/>
            <Divider />
            <Skeleton variant="rounded"/>
            <Divider />
            <Skeleton variant="rounded"/>
            <Divider />
            <Skeleton variant="rounded"/>
        </Stack>
    );
}



export default TracksTableSkeleton;