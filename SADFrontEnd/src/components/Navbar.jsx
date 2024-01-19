import Wrapper from "../assets/styles/Navbar";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import Logo from "./Logo";
import { useDashboardContext } from "../Pages/DashboardLayout";
const Navbar = () => {
  // for the toggle sidebar function we will use context function
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="Toggle-btn" onClick={toggleSidebar}>
          <TbLayoutSidebarLeftExpandFilled />
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
