import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 2px 0 0 rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--background-secondary-color);
      box-shadow: 2px 2px 1px #f0f0f0, inset -20px -20px 60px #ffffff40;
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
      margin-left: 1rem;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 5.9rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 1.8rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem 1rem;
      padding-left: 3.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 4rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      font-size: 2.3rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    .logo {
      width: 10.8rem;
      margin-left: -1rem;
    }
    .pending {
      background: var(--background-color);
    }
  }
`;
export default Wrapper;