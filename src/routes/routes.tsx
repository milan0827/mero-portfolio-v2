import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Blogs from "../pages/blogs/Blogs";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import Projects1 from "../pages/projects1/Projects1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
        children: [
          {
            index: true,
            element: <Navigate to="/projects/select-project" />,
          },
          {
            path: "/projects/select-project",
            element: <Projects />,
          },
          {
            path: "/projects/project-1",
            element: <Projects1 />,
          },
          // {
          //   path: "/projects/project-2",
          //   element: <Projects2 />,
          // },
        ],
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
