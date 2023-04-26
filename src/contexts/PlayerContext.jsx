import React from "react";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

const Context = React.createContext();

const PlayerProvider = ({ children }) => {
    const [list, setList] = React.useState([]);
    const [index, setIndex] = React.useState(0);

    const handleForward = (shuffle) => {
        setIndex(i => (shuffle ? (Math.floor(Math.random() * 10)) : ++i) % list.length);
    }

    const handleBackward = () => {
        
    }

    return (
        <Context.Provider value={{ index, setIndex, list, setList }}>
            {children}
            {list && list.length > 0 && <AudioPlayer track={list[index]} onForward={handleForward} onBackward={handleBackward}/>}
        </Context.Provider>
    );
}

export default PlayerProvider;

export const usePlayer = () => React.useContext(Context);