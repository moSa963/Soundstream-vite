import { Stack } from "@mui/material";
import React from "react";


const HorizontalList = ({ children, noWrap }) => {
    const ref = React.useRef();

    React.useEffect(() => {
        const handleScroll = (e) => {
            if (!ref.current || e.deltaX != 0) {
                return;
            }

            const { scrollLeft, scrollWidth, offsetWidth } = e.currentTarget;

            if ((scrollLeft < scrollWidth - offsetWidth && e.deltaY > 0) || (scrollLeft != 0 && e.deltaY < 0)) {
                e.preventDefault();
            }

            e.currentTarget.scrollBy({ left: e.deltaY < 0 ? -40 : 40 });
        }

        ref.current?.addEventListener("wheel", handleScroll);

        return () => ref.current?.removeEventListener("wheel", handleScroll);
    }, [ref.current]);

    return (
        <Stack ref={ref}
            flexWrap={noWrap ? "nowrap" : "wrap"}
            direction="row"
            justifyContent={noWrap ? "start" : "center"}
            sx={{ overflowX: noWrap ? "auto" : "hidden" }}
        >
            {children}
        </Stack>
    );
}


export default HorizontalList;