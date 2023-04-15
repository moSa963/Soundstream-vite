import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemeProvider from "./contexts/ThemeContext";
import { RouterProvider } from 'react-router-dom';
import {createRoutes} from "./components/BrowserRouter";

const router = createRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
)
