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
import {action as registerAction} from './Pages/RegisterPage';
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
        action: registerAction 
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        index: true,
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "Dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
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
