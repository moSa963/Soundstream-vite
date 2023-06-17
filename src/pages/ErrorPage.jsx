import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Error from "../components/Error";

const ErrorPage = () => {
    const nav = useNavigate();
    const error = useRouteError();

    
    return (
        <Error
            action="GO BACK"
            height="100vh"
            onAction={() => nav(-1)}
            status={error.status}
            statusText={error.statusText}
        />
    );
};

export default ErrorPage;
