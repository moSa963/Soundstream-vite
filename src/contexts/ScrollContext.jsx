"use client"
import { Paper } from "@mui/material";
import React, { createContext, useContext } from "react";

const Context = createContext();

const ScrollProvider = ({ children }) => {
    const [scroll, setScroll] = React.useState(0);

    const handleScroll = (e) => {
        setScroll(Math.floor(e.currentTarget.scrollTop));
    }

    return (
        <Context.Provider value={{ scroll, scrollTo }}>
            <Paper elevation={0}
            sx={{ height: "100%", width: "100%", position: "relative", overflow: "auto", overflowX: "hidden", borderRadius: 0 }} 
            onScroll={handleScroll}>
                {children}
            </Paper>
        </Context.Provider>
    );
}

export default ScrollProvider;

export const useScroll = () => useContext(Context);