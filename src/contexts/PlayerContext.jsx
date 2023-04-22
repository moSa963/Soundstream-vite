import React from "react";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

const Context = React.createContext();

const PlayerProvider = ({ children }) => {
    const [list, setList] = React.useState(listPlaceholder);
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


const listPlaceholder = [
    {
        id: 1,
        src: "factory.mp3",
        user: {
            username: 'username1',
        },
        title: 'track1',
        duration: 5,
        explicit: false,
        written_by: 'written_by',
        performed_by: 'performed_by',
        album: null,
        created_at: '25/5/2005',
    },
    {
        id: 3,
        src: "factory.mp3",
        user: {
            username: 'username1',
        },
        title: 'track1',
        duration: 5,
        explicit: false,
        written_by: 'written_by',
        performed_by: 'performed_by',
        album: null,
        created_at: '25/5/2005',
    },    
    {
        id: 2,
        src: "factory.mp3",
        user: {
            username: 'username1',
        },
        title: 'track1',
        duration: 5,
        explicit: false,
        written_by: 'written_by',
        performed_by: 'performed_by',
        album: null,
        created_at: '25/5/2005',
    },
]