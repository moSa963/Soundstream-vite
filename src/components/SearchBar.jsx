import Search from '@mui/icons-material/Search';
import { Button, InputBase, Paper } from '@mui/material';
import React from 'react';


const SearchBar = ({ onSearch }) => {
    const [input, setInput] = React.useState("");

    return (
        <Paper
            sx={{
                flex: 1,
                ":hover": { boxShadow: t => t.shadows[5], filter: "contrast(90%)" },
                width: "100%",
                borderRadius: 2,
                display: "flex",
                overflow: "hidden",
                top: 0,
                zIndex: 2,
            }}
        >
            <InputBase
                onKeyUp={(e) =>
                    e.key === "Enter" && onSearch && onSearch(input)
                }
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
                placeholder="Search..."
                sx={{ width: "100%", px: 2, fontSize: 30 }}
            />
            <Button onClick={() => onSearch && onSearch(input)}>
                <Search />
            </Button>
        </Paper>
    );
}


export default SearchBar;