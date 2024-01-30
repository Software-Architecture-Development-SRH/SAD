import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AddJob,
  Admin,
  AllJobs,
  DashboardLayout,
  DeleteJob,
  EditJob,
  Error,
  HomeLayout,
  LandingPage,
  Login,
  ProfilePage,
  RegisterPage,
  StatsPage,
} from "./Pages";
import { action as registerAction } from "./Pages/RegisterPage";
import { action as loginAction } from "./Pages/Login";
import { action as addJobAction } from "./Pages/AddJob";

import { loader as dashboardLoader } from "./Pages/DashboardLayout";
import { loader as allJobsLoader } from "./Pages/AllJobs";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "false";
  document.body.classList.toggle("darkTheme", isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme();
/* Setting of the web-url routes using createBrowserRouter from ES7 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        index: true,
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "Dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "Stats",
            element: <StatsPage />,
          },
          {
            path: "edit",
            element: <EditJob />,
          },
          {
            path: "delete",
            element: <DeleteJob />,
          },
          {
            path: "alljobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
