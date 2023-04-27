import React from "react";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import { CircularProgress } from "@mui/material";
import request from "../utils/Request";

const Context = React.createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        loadUser(setUser);
    }, []);

    return (
        <Context.Provider value={{ user }}>
            {user ? children : <CircularProgress />}
        </Context.Provider>
    );
}

const loadUser = async (setUser) => {
    const res = await request("api/user");

    if (res.ok)
    {
        const js = await res.json();
        setUser(js.data);
    }
}

export default AuthProvider;

export const useAuth = () => React.useContext(Context);