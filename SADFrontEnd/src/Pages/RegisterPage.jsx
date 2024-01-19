import Wrapper from "../assets/styles/registerandsignup";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import FormRow from '../components/FormRow';

const RegisterPage = () => {
  return <Wrapper>
    <form className="form">
      <Logo/>
      <h4>Register</h4>
      <FormRow type='text' name='name' defaultvalue='Ankush'/>
      <FormRow type='text' name='lastname' labelText='Last Name' defaultvalue='Gangal'/>
      <FormRow type='text' name='Location' defaultvalue='Mannheim'/>
      <FormRow type='email' name='Email' defaultvalue='ankushLgmail.com'/>
      <FormRow type='password' name='Password' defaultvalue='secret123'/>
      <button type="submit" className="btn btn-block">Submit</button>
      <p>
        Already have an account?
        <Link to='/login' className="member-btn">Login</Link>
      </p>
      </form>
    
  </Wrapper>
};

export default RegisterPage;
