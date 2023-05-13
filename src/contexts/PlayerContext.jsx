import React from "react";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

const Context = React.createContext();

const PlayerProvider = ({ children }) => {
    const [list, setList] = React.useState([]);
    const [indices, setIndices] = React.useState([0]);

    const addTrack = React.useCallback((track) => {
        setList(list => (
            list.find(v => v.id == track.id) ? list : [...list, track]
        ));
    }, []);

    const playTrack = React.useCallback((track) => {
        const index = list.findIndex(v => v.id == track.id);
        index != -1 && setIndices(i => [...i, index]);
    }, [list]);

    const handleForward = (shuffle) => {
        setIndices(i => [...i, (shuffle ? (Math.floor(Math.random() * 10)) : indices[indices.length - 1] + 1) % list.length]);
    }

    const handleBackward = () => {
        indices.length > 1 && setIndices(i => i.slice(0, i.length - 1));
    }

    return (
        <Context.Provider value={{ indices, setIndices, list, setList, addTrack, playTrack }}>
            {children}
            {
                list.length > 0 &&
                <AudioPlayer track={list[indices[indices.length - 1]]} onForward={handleForward} onBackward={handleBackward} />
            }
        </Context.Provider>
    );
}

export default PlayerProvider;

export const usePlayer = () => React.useContext(Context);