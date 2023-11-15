import { Button, Card, InputBase, Typography } from "@mui/material";
import React from "react";
import { textDirection } from "../../utils/text";




const AddLyricsForm = ({ onAdded }) => {
    const [data, setData] = React.useState("");

    const handleClick = () => {
        onAdded && onAdded(data);
    }

    return (
        <React.Fragment>
            <Typography variant="h6">Add lyrics</Typography>
            <Card sx={{
                display: "flex",
                width: "75%",
                height: "100%",
                justifyContent: "start",
                alignItems: "start",
                p: 3,
                borderTopRightRadius: 25,
                borderBottomLeftRadius: 25,
                overflow: "auto",
                border: t => `1px solid ${t.palette.primary.light}`
            }}
                elevation={0}>
                <InputBase value={data} onChange={(e) => setData(e.currentTarget.value)} placeholder="Write the lyrics here..." sx={{ width: "100%", minHeight: "100%", textAlign: "start", justifyContent: "start", alignItems: "start", direction: textDirection(data) }} multiline></InputBase>
            </Card>
            <Button variant="contained" onClick={handleClick}>Add</Button>
        </React.Fragment>
    );
}


export default AddLyricsForm;