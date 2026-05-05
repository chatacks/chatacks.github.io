import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/blog", element: <Blog /> },
      // { path: "/blog/:slug", element: <BlogPost /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
