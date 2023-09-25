import { Box, Typography } from "@mui/material";
import React from "react";


const LyricsViewer = ({ lyrics = "", stamps = [], current = 0, onClick, flex }) => {
    const ref = React.useRef(null);
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setIndex(v => {
            for (var i = 0; i < stamps.length; ++i) {
                if (current < stamps[i]) {
                    return i - 1;
                }
            }
            return stamps.length - 1;
        });
    }, [current, stamps]);

    React.useEffect(() => {
        if (ref.current == null || index == -1) {
            return;
        }

        const nodes = ref.current.childNodes;
        var i = nodes.length > index ? index : nodes.length - 1;

        nodes[i].scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
    }, [ref.current, index]);

    return (
        <Box sx={{ width: "100%", height: "100%", overflow: "auto", overflowX: "hidden", flex: flex }} ref={ref} >
            {
                lyrics.split(/[\r\n]/).map(
                    (line, i) =>
                        <React.Fragment key={i}>
                            {
                                line.length > 0
                                    ? <Typography
                                        onClick={() => onClick && onClick(line, i)}
                                        variant="h5"
                                        sx={{ width: "fit-content", opacity: index == i ? 1 : 0.8, cursor: "pointer", wordBreak: "break-word", transformOrigin: "left", ":hover": { transform: "scale(1.05)" } }}
                                        color={index == i ? "primary" : null}
                                        fontFamily="cursive"
                                        fontWeight="bold" >
                                        {line}
                                    </Typography>
                                    : <br />
                            }
                        </React.Fragment>
                )
            }
        </Box>
    );
}


export default LyricsViewer;