import Wrapper from "../assets/styles/Navbar";
import {
  TbLayoutSidebarLeftExpandFilled,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";
import Logo from "./Logo";
import { useDashboardContext } from "../Pages/DashboardLayout";
const Navbar = () => {
  // for the toggle sidebar function we will use context function
  const { toggleSidebar, showSidebar } = useDashboardContext();
  const clickfunction = () => {
    console.log("toggle buton working-------------");
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          title="Toggle Visiliblity"
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          {showSidebar ? (
            <TbLayoutSidebarLeftCollapseFilled /> // Show this icon when the sidebar is expanded
          ) : (
            <TbLayoutSidebarLeftExpandFilled /> // Show this icon when the sidebar is collapsed
          )}
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div className="btn-container">toggle/logout</div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
