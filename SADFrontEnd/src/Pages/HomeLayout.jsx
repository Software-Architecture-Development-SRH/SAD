import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>THIS IS FOR THE NAVBAR</nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
