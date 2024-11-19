import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Blogs from "../pages/blogs/Blogs";
import Resume from "../pages/resume/Resume";
import Contacts from "../pages/contacts/Contacts";

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
        lazy: async () => {
          let skills = await import("../pages/skills/Skills");
          return { Component: skills.default }; //Testing if this works or not
        },
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
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
