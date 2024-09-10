import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import './index.css'
import BlogPost from './BlogPost/index.tsx';
import NavBar from './_components/NavBar.tsx';
import Footer from './_components/Footer.tsx';
import Root from './Root/index.tsx';

const router = createBrowserRouter([
    {
        element:
            <>
                <NavBar />
                <Outlet />
                <Footer />
            </>,
        errorElement: null,
        children: [
            {
                path: "/",
                element: <Root />
            },
            {
                path: "/blogPost",
                element: <BlogPost />
            }
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
