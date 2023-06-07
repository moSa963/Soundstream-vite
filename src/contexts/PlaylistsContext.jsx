import React from "react";
import request from "../utils/Request";
import { useMessage } from "./MessageContext";

const Context = React.createContext();

const PlaylistsProvider = ({ children }) => {
    const [playlists, setPlaylists] = React.useState([]);
    const {setError} = useMessage();

    
    React.useEffect(() => {
        loadData(setPlaylists, setError);
    }, []);
    
    return (
        <Context.Provider value={{ playlists, setPlaylists }}>
            {children}
        </Context.Provider>
    );
}

const loadData = async (setPlaylists, setError) => {
    try {
        const res = await request("api/playlists");
        const js = await res.json();
        setPlaylists(js.data);
    }
    catch (error) {
        setError(error);
    }

}

export default PlaylistsProvider;

export const usePlaylists = () => React.useContext(Context);