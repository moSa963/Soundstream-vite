import {  createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LikesPage from "../pages/LikesPage";
import SearchPage from "../pages/SearchPage";
import ShowPlaylistPage from "../pages/ShowPlaylistPage";
import PlaylistsPage from "../pages/PlaylistsPage";



export const createRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage status={404} errorText="NotFound" />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "likes",
                element: <LikesPage />,
            },
            {
                path: "search",
                element: <SearchPage  />,
            },
            {
                path: "playlist",
                element: <ShowPlaylistPage />,
                children: [
                    {
                        index: true,
                        element: <PlaylistsPage  />,
                    },
                    {
                        path: ":id",
                        element: <ShowPlaylistPage  />,
                    },
                ]
            }
        ]
    }
]);
