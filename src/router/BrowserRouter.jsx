import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LikesPage from "../pages/LikesPage";
import SearchPage from "../pages/SearchPage";
import ShowPlaylistPage from "../pages/ShowPlaylistPage";
import PlaylistsPage from "../pages/PlaylistsPage";
import LibraryPage from "../pages/LibraryPage";
import request from "../utils/Request";
import ProfilePage from "../pages/AccountPage/ProfilePage";
import AccountPage from "../pages/AccountPage/AccountPage";
import ShowTrackPage from "../pages/ShowTrackPage";
import ShowUserPage from "../pages/ShowUserPage/ShowUserPage";
import UserAlbumsPage from "../pages/ShowUserPage/UserAlbumsPage";
import UserPlaylistsPage from "../pages/ShowUserPage/UserPlaylistsPage";
import UserLikedPage from "../pages/ShowUserPage/UserLikedPage";



export const createRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
            {
                path: "account",
                element: <AccountPage />,
                children: [
                    {
                        index: true,
                        element: <ProfilePage />,
                    },
                ]
            },
            {
                path: "track/:id",
                element: <ShowTrackPage />,
                loader: async ({ params }) => request(`api/tracks/${params.id}`)
            },
            {
                path: "user/:username",
                element: <ShowUserPage />,
                loader: async ({ params }) => request(`api/users/${params.username}`),
                children:[
                    {
                        index: true,
                        element: <UserAlbumsPage />,
                    },
                    {
                        path: "liked",
                        element: <UserLikedPage />
                    },
                    {
                        path: "playlists",
                        element: <UserPlaylistsPage />
                    },
                ],
            },
            {
                path: "library",
                children: [
                    {
                        index: true,
                        element: <LibraryPage />,
                    },
                    {
                        path: "albums",
                        children: [
                            {
                                index: true,
                                element: <PlaylistsPage albums/>,
                            },
                            {
                                path: ":id",
                                element: <ShowPlaylistPage album/>,
                                loader: async ({ params }) => request(`api/playlists/${params.id}`),
                            },
                        ],
                    },
                    {
                        path: "playlists",
                        children: [
                            {
                                index: true,
                                element: <PlaylistsPage />,
                            },
                            {
                                path: ":id",
                                element: <ShowPlaylistPage />,
                                loader: async ({ params }) => request(`api/playlists/${params.id}`),
                            },
                        ]
                    },
                ]
            },
            {
                path: "likes",
                element: <LikesPage />,
            },
        ]
    }
]);
