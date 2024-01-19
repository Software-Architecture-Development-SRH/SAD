import { Outlet } from "react-router-dom";
import Wrapper from "../assets/styles/Dashboard";
import MobileSidebar from "../components/MobileSidebar";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { createContext, useState } from "react";

//context prop for global use
const DashboardContext = createContext();

const DashboardLayout = () => {
  // temporary
  const user = { name: "Vedant" };
  // for the Sidebar to toggel in mobile view
  const [showSidebar, setShowSidebar] = useState(false);
  // for the Theme to toggel white and black
  //const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("Dark theme has been toggled !");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("User has been logged out !");
  };

  return (
    <DashboardContext.Provider
      value={(user, showSidebar, toggleDarkTheme, toggleSidebar, logoutUser)}
    >
      <Wrapper>
        <main className="dashboard">
          <MobileSidebar />
          <Sidebar />
          <div>
            <Navbar />
            <div className="DboardPage">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
// instead of exporting the main content this is a useHook for it
//export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;