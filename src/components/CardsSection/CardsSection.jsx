import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ShowAllButton from "./ShowAllButton";
import HorizontalList from "../HorizontalList";


const CardsSection = ({ title, onShowAll, data, Card, noWrap }) => {

    return (
        <Stack spacing={2} sx={{ width: "100%", p: 2 }}>
            <Typography variant="h4" fontFamily="cursive">{title}</Typography>

            <HorizontalList noWrap={noWrap}>
                { data?.map(v => <Card key={v.id} data={v} />) }
            </HorizontalList>

            { onShowAll && <ShowAllButton onClick={onShowAll}/> }
        </Stack>
    );
}


export default CardsSection;