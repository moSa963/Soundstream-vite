import React from "react";
import { useMessage } from "../contexts/MessageContext";
import request from "../utils/Request";
import { Box } from "@mui/material";
import { useScroll } from "../contexts/ScrollContext";


const PaginationList = ({ url, loader, Skeleton, payload }) => {
    const ref = React.useRef();
    const [list, setList] = React.useState(null);
    const [next, setNext] = React.useState(null);
    const [progress, setProgress] = React.useState(false);
    const { scroll } = useScroll();
    const { setError } = useMessage();

    const loadNext = React.useCallback(() => !progress && loadData(next, setList, setNext, setError, setProgress, true), [next, progress]);

    const loadedData = React.useMemo(() => loader({list, next, setList, loadNext, payload}), [list, next, loadNext, payload]);

    React.useEffect(() => {
        setList(null);
    }, [url]);

    React.useEffect(() => {
        if (list === null && !progress && ref.current.getBoundingClientRect().top < 800) {
            loadData(url, setList, setNext, setError, setProgress);
        }
    }, [url, setError, list, progress, scroll]);

    return (
        <Box ref={ref}>
            {list !== null && loadedData}
            {list === null && Skeleton && <Skeleton />}
        </Box>
    )
}

const loadData = async (url, setList, setNext, setError, setProgress, append) => {
    if (url == null) {
        return;
    }

    setProgress(true);

    try {
        const res = await request(url);
        const js = await res.json();
        setNext(js?.links?.next);
        setList(data => append ? [...data, ...js.data] : js.data);
    } catch (error) {
        setList(js => js || []);
        setError(error);
    }

    setProgress(false);
}

export default PaginationList;