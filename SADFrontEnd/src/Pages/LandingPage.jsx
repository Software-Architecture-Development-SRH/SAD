import Wrapper from "../assets/styles/LandingPage";
import { Link } from 'react-router-dom';
import MainImage from "../assets/images/MainImage.svg"
import Logo from "../components/Logo";
const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
      <Logo/>
     
      </nav>
      <div className="container page">
      <div className="info">
        <h1>The only <span>Job Tracking</span> app you need</h1>
        <p>Streamline your job search with JobVigil – the ultimate web app for tracking job applications. 
          Effortlessly manage and organize your applications online. 
          Stay on top of updates and take control of your career journey!</p>
       <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/Login' className='btn '>
            Login 
          </Link>
      </div>
      <img src={MainImage} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default LandingPage;