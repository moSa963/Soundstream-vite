import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Context = React.createContext();

const MessageProvider = ({ children }) => {
    const [message, setMessage] = React.useState({ title: "", type: "info" });

    React.useEffect(() => {
        const id = setTimeout(() => {
            setMessage({ title: "", type: "info" });
        }, 5000);

        return () => {
            clearTimeout(id);
        }
    }, [message]);

    return (
        <Context.Provider value={{ 
            message, 
            setError: (v) => setMessage({ type: "error", title: v}),
            setInfo: (v) => setMessage({ type: "info", title: v}),
        }}>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={Boolean(message.title)} sx={{ zIndex: 999999 }} >
                <Alert severity={message.type} sx={{ width: '100%', wordBreak: "break-word" }} >
                    {message.title}
                </Alert>
            </Snackbar>
            {children}
        </Context.Provider>
    );
}

export default MessageProvider;

export const useMessage = () => React.useContext(Context);