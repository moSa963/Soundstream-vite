import React from "react";
import { useMessage } from "../contexts/MessageContext";
import request from "../utils/Request";
import { Box } from "@mui/material";
import { useScroll } from "../contexts/ScrollContext";


const PaginationList = ({ url, loader, Skeleton }) => {
    const ref = React.useRef();
    const [list, setList] = React.useState(null);
    const [next, setNext] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const [progress, setProgress] = React.useState(false);
    const { scroll } = useScroll();
    const { setError } = useMessage();

    const loadNext = React.useCallback(() => !progress && loadData(next, setList, setNext, setError, setProgress, true), [next, progress]);

    const loadedData = React.useMemo(() => loader(list, next, setList, loadNext), [loader, list, next, loadNext]);

    React.useEffect(() => {
        setList(null);
    }, [url]);

    React.useEffect(() => {
        setVisible(ref.current.getBoundingClientRect().top < 800);
    }, [ref.current, scroll]);

    React.useEffect(() => {
        if (list === null && visible && !progress) {
            loadData(url, setList, setNext, setError, setProgress);
        }
    }, [url, setError, list, visible, progress]);

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
        setError(error);
    }

    setProgress(false);
}

export default PaginationList;