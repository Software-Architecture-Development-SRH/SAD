import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Wrapper from "../assets/styles/registerandsignup";
import FormRow from '../components/FormRow/'

const Login = () => {
  return (
<Wrapper>
<form className="form">
  <Logo/>
  <h4>Login </h4>
  <FormRow type= 'email' name ='Email' defaultvalue='ankush@gmail.com'/>
  <FormRow type= 'password' name ='Password' defaultvalue='secret123'/>
  <button type='submit' className='btn btn-block'>Submit</button>
  <button type='button' className='btn btn-block'>Expöore without Login</button>
  <p>
        Not a member yet?
        <Link to='/register' className="member-btn">Register</Link>
      </p>
      </form>
</Wrapper>

  );

};

export default Login;
