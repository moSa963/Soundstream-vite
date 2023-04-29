import React from "react";
import request from "../utils/Request";

const Context = React.createContext();

const PlaylistsProvider = ({ children }) => {
    const [playlists, setPlaylists] = React.useState([]);

    React.useEffect(() => {
        loadData(setPlaylists);
    }, []);
    
    return (
        <Context.Provider value={{ playlists, setPlaylists }}>
            {children}
        </Context.Provider>
    );
}

const loadData = async (setPlaylists) => {
    const res = await request("api/playlists");

    if (res.ok)
    {
        const js = await res.json();
        setPlaylists(js.data);
    }

}

export default PlaylistsProvider;

export const usePlaylists = () => React.useContext(Context);