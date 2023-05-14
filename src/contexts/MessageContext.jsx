import React from "react";

const Context = React.createContext();

const MessageProvider = ({ children }) => {
    const [message, setMessage] = React.useState({title: "", type: ""});
    
    React.useEffect(() => {
        const id = setTimeout(() => {
            setMessage({title: "", type: ""});
        }, 4000);

        return () => {
            clearTimeout(id);
        }
    }, [message]);

    return (
        <Context.Provider value={{ message, setMessage }}>
            {children}
        </Context.Provider>
    );
}

export default MessageProvider;

export const useMessage = () => React.useContext(Context);