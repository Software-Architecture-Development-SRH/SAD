import Wrapper from "../assets/styles/LandingPage";
import Logo from "../components/Logo";
const LandingPage = () => {
  return (
    <Wrapper>
      <h2>Landing Page</h2>
      <Logo />
      <div className="content"> some content</div>
    </Wrapper>
  );
};

export default LandingPage;
