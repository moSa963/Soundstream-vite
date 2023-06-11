import { Skeleton, Stack } from "@mui/material";
import React from "react";
import HorizontalList from "../HorizontalList";
import CardSkeleton from "./CardSkeleton";


const CardsSectionSkeleton = ({ noWrap }) => {

    return (
        <Stack spacing={2} sx={{ width: "100%", p: 2 }}>
            <Skeleton variant="text"/>

            <HorizontalList noWrap={noWrap}>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </HorizontalList>
        </Stack>
    );
}


export default CardsSectionSkeleton;