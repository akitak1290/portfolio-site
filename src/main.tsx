import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import './index.css'
import BlogPost from './BlogPost/index.tsx';
import NavBar from './_components/NavBar.tsx';
import Footer from './_components/Footer.tsx';
import Root from './Root/index.tsx';
import Error from './_components/Error.tsx';

import { Analytics } from "@vercel/analytics/react"

const router = createBrowserRouter([
    {
        element:
            <>
                <NavBar />
                <Analytics />
                <Outlet />
                <Footer />
            </>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Root />,
            },
            {
                path: "/blog/:name",
                element: <BlogPost section="blog" />,
            },
            {
                path: "experience/:name",
                element: <BlogPost section="experience" />,
            },
            {
                path: "*",
                element: <Error status={404}/>,
            }
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
