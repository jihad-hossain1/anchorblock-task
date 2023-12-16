import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Users from "../pages/Dashboard/users/Users";
import Reporting from "../pages/Dashboard/Reporting/Reporting";
import Tasks from "../pages/Dashboard/Tasks/Tasks";
import Projects from "../pages/Dashboard/Projects/Projects";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/projects",
        element: <Projects />,
      },
      {
        path: "/dashboard/tasks",
        element: <Tasks />,
      },
      {
        path: "/dashboard/reporting",
        element: <Reporting />,
      },
    ],
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);
