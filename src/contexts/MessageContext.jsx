import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Context = React.createContext();

const MessageProvider = ({ children }) => {
    const [message, setMessage] = React.useState({ title: "", type: "info" });

    const setError = React.useCallback((v) => setMessage({ type: "error", title: v?.statusText || v}), [setMessage]);
    const setInfo = React.useCallback((v) => setMessage({ type: "info", title: v?.statusText || v}), [setMessage]);

    React.useEffect(() => {
        if (! message?.title)
        {
            return;
        }
        
        const id = setTimeout(() => {
            setMessage({ title: "", type: "info" });
        }, 5000);

        return () => {
            clearTimeout(id);
        }
    }, [message?.title]);

    return (
        <Context.Provider value={{  setError, setInfo }}>
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