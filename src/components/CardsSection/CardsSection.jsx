import { Box, Stack, Typography } from "@mui/material";
import React from "react";


const CardsSection = ({ title, onShowAll, data, Card }) => {


    return (
        <Stack spacing={2} sx={{ width: "100%", p: 2 }}>
            <Typography variant="h4" fontFamily="cursive">{title}</Typography>

            <Stack flexWrap="wrap" direction="row" justifyContent="center">
                {data?.map(v => <Card key={v.id} data={v} />) }
            </Stack>

            {onShowAll &&
                <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
                    <Typography variant="caption"
                        color="primary"
                        onClick={onShowAll}
                        sx={{ cursor: "pointer", ":hover": { transform: "scale(1.2)" } }}>Show all</Typography>
                </Box>
            }
        </Stack>
    );
}


export default CardsSection;