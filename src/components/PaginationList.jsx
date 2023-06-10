import React from "react";
import { useMessage } from "../contexts/MessageContext";
import request from "../utils/Request";


const PaginationList = ({ url, loader }) => {
    const [list, setList] = React.useState([]);
    const [next, setNext] = React.useState(null);
    const [progress, setProgress] = React.useState(false);
    const { setError } = useMessage();

    React.useEffect(() => {
        !progress && loadData(url, setList, setNext, setProgress, setError);
    }, [url, setError]);

    return loader(list, next, setList, () => loadData(next, setList, setNext, setProgress, setError, true));
}

const loadData = async (url, setList, setNext, setProgress, setError, append) => {
    if (url == null)
    {
        return;
    }

    setProgress(true);

    try {
        const res = await request(url);
        const js = await res.json();
        setNext(js?.links?.next);
        setList(data => append ? [...data, ...js.data] : js.data);
    } catch (error) {
        setError(error);
    }

    setProgress(false);
}

export default PaginationList;