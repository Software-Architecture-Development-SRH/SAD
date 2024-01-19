import Wrapper from "../assets/styles/registerandsignup";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return <Wrapper>
    <form className="form">
      <Logo/>
      <h4>Register</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
       <input type="text" 
        id="name"
        name="name" 
        className="form-input" 
        defaultValue='John'
        required
        />
      </div>
      <button type="submit" className="btn btn-block">Submit</button>
      <p>
        Already have an account?
        <Link to='/login' className="member-btn">Login</Link>
      </p>
      </form>
    
  </Wrapper>
};

export default RegisterPage;
