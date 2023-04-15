import {  createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";



export const createRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "*",
                element: <ErrorPage status={404} errorText="Sorry. this page does not exist" to={"/dashboard"} toText="HOMR PAGE" />,
            }
        ]
    }
]);
