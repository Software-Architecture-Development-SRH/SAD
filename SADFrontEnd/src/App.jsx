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
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
      {
        path: "/profiler",
        element: <ProfilePage />,
      },
      {
        path: "/Stats",
        element: <StatsPage />,
      },
      {
        index: true,
        path: "/",
        element: <LandingPage />,
      },

      {
        path: "/edit",
        element: <EditJob />,
      },
      {
        path: "/delete",
        element: <DeleteJob />,
      },
      {
        path: "/alljobs",
        element: <AllJobs />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/addJob",
        element: <AddJob />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
