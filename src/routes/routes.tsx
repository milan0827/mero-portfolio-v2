import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Blogs from "../pages/blogs/Blogs";
import Skills from "../pages/skills/Skills";
import Resume from "../pages/resume/Resume";

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
        lazy: async () => {
          let { Home } = await import("../pages/home/Home");
          return { Component: Home };
        },
      },
      {
        path: "/projects",
        // Project page lazyily loaded cause it contains heavy images
        lazy: async () => {
          let loaderFn = await import("../pages/projects/Projects");
          return { Component: loaderFn.default }; //Testing if this works or not
        },
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
