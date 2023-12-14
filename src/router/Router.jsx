import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Users from "../pages/Dashboard/users/Users";
import Reporting from "../pages/Dashboard/Reporting/Reporting";
import Tasks from "../pages/Dashboard/Tasks/Tasks";
import Projects from "../pages/Dashboard/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <DashboardHome />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/reporting",
        element: <Reporting />,
      },
    ],
  },
]);
