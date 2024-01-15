import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Components/HomeLayout";
import AboutPage from "./Components/AboutPage";

/* Setting of the web-url routes using createBrowserRouter from ES7 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
