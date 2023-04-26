import {  createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LikesPage from "../pages/LikesPage";
import SearchPage from "../pages/SearchPage";
import ShowPlaylistPage from "../pages/ShowPlaylistPage";
import PlaylistsPage from "../pages/PlaylistsPage";
import LibraryPage from "../pages/LibraryPage";
import request from "../utils/Request";



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
                path: "library",
                element: <LibraryPage  />,
            },
            {
                path: "playlist",
                children: [
                    {
                        index: true,
                        loader: async () => await request("api/playlists"),
                        element: <PlaylistsPage  />,
                    },
                    {
                        path: ":playlistId",
                        element: <ShowPlaylistPage  />,
                        loader: async ({ params }) => request(`api/playlists/${params.playlistId}`),
                          
                    },
                ]
            }
        ]
    }
]);
