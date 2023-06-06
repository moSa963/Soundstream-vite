import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalList from "../HorizontalList";
import TextButton from "../TextButton";


const CardsSection = ({ title, onAction, actionTitle, data, Card, noWrap }) => {

    return (
        <Stack spacing={2} sx={{ width: "100%", p: 2 }}>
            <Typography variant="h4" fontFamily="cursive">{title}</Typography>

            <HorizontalList noWrap={noWrap}>
                { data?.map(v => <Card key={v.id} data={v} />) }
            </HorizontalList>

            {onAction && <TextButton onClick={onAction} title={actionTitle} justifyEnd/> }
        </Stack>
    );
}


export default CardsSection;