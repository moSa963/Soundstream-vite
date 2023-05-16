import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ThemeProvider from "./contexts/ThemeContext";
import { RouterProvider } from 'react-router-dom';
import {createRoutes} from "./router/BrowserRouter";

const router = createRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
)
