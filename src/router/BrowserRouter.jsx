import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import request from "../utils/Request";
import ShowPlaylistErrorPage from "../pages/ShowPlaylistPage/ShowPlaylistErrorPage";



export const createRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                lazy: () => getLazyComponent(import("../pages/HomePage")),
            },
            {
                path: "search",
                lazy: () => getLazyComponent(import("../pages/SearchPage")),
            },
            {
                path: "account",
                lazy: () => getLazyComponent(import("../pages/AccountPage/AccountPage")),
                children: [
                    {
                        index: true,
                        lazy: () => getLazyComponent(import("../pages/AccountPage/ProfilePage")),
                    },
                ]
            },
            {
                path: "track/:id",
                loader: async ({ params }) => request(`api/tracks/${params.id}`),
                id: "track_root",
                children: [
                    {
                        index: true,
                        lazy: () => getLazyComponent(import("../pages/ShowTrackPage")),
                    },
                    {
                        path: "lyrics",
                        lazy: () => getLazyComponent(import("../pages/StoreLyricsPage/StoreLyricsPage")),
                    }
                ],
            },
            {
                path: "user/:username",
                lazy: () => getLazyComponent(import("../pages/ShowUserPage/ShowUserPage")),
                loader: async ({ params }) => request(`api/users/${params.username}`),
                children: [
                    {
                        index: true,
                        lazy: () => getLazyComponent(import("../pages/ShowUserPage/UserAlbumsPage")),
                    },
                    {
                        path: "liked",
                        lazy: () => getLazyComponent(import("../pages/ShowUserPage/UserLikedPage")),
                    },
                    {
                        path: "playlists",
                        lazy: () => getLazyComponent(import("../pages/ShowUserPage/UserPlaylistsPage")),
                    },
                ],
            },
            {
                path: "library",
                children: [
                    {
                        index: true,
                        lazy: () => getLazyComponent(import("../pages/LibraryPage")),
                    },
                    {
                        path: "albums",
                        children: [
                            {
                                index: true,
                                lazy: () => getLazyComponent(import("../pages/AlbumsPage")),
                            },
                            {
                                path: ":id",
                                lazy: () => getLazyComponent(import("../pages/ShowPlaylistPage/ShowPlaylistPage")),
                                loader: async ({ params }) => request(`api/playlists/${params.id}`),
                            },
                        ],
                    },
                    {
                        path: "playlists",
                        children: [
                            {
                                index: true,
                                lazy: () => getLazyComponent(import("../pages/PlaylistsPage")),
                            },
                            {
                                path: ":id",
                                errorElement: <ShowPlaylistErrorPage />,
                                lazy: () => getLazyComponent(import("../pages/ShowPlaylistPage/ShowPlaylistPage")),
                                loader: async ({ params }) => request(`api/playlists/${params.id}`),
                            },
                        ]
                    },
                ]
            },
            {
                path: "likes",
                lazy: () => getLazyComponent(import("../pages/LikesPage")),
            },
        ]
    }
]);


const getLazyComponent = async (op) => {
    return {
        Component: (await op).default
    };
}