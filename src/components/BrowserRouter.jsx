import {  createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LikesPage from "../pages/LikesPage";
import SearchPage from "../pages/SearchPage";
import ShowPlaylistPage from "../pages/ShowPlaylistPage";



export const createRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage status={404} errorText="NotFound" />,
        children: [

            {
                path: "likes",
                element: <LikesPage />,
            },
            {
                path: "search",
                element: <SearchPage  />,
            },
            {
                path: "playlist:id",
                element: <ShowPlaylistPage />,
            }
        ]
    }
]);
