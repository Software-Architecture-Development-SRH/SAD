import Logo from "../components/Logo";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/styles/registerandsignup";
import FormRow from '../components/FormRow/'
import { toast } from 'react-toastify';
export const action=async({request})=>{
  const formData= await request.formData()
  const data=Object.formEnteries(formData)
  try {
    await customFetch.post('/auth/login', data)
    toast.success('Login Successful')
    return redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error;
  }


}
const Login = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state ==='submitting' 

  return (
<Wrapper>
<Form method ='post' className="form">
  <Logo/>
  <h4>Login </h4>
  <FormRow type= 'email' name ='Email' defaultvalue='ankush@gmail.com'/>
  <FormRow type= 'password' name ='Password' defaultvalue='secret123'/>
  <button type='submit' className='btn btn-block' disabled={isSubmitting}>{isSubmitting ? 'submitting' : 'submit'}</button>
  <button type='button' className='btn btn-block'>Explore without Login</button>
  <p>
        Not a member yet?
        <Link to='/register' className="member-btn">Register</Link>
      </p>
      </Form>
</Wrapper>

  );

};

export default Login;
