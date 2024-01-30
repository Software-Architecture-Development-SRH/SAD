import Wrapper from "../assets/styles/registerandsignup";
import Logo from "../components/Logo";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import customFetch from "../Utils/customFetch";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    console.log(JSON.stringify(data));
    await customFetch.post("/auth/register", data);
    toast.success("Registaration successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const RegisterPage = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultvalue="ankush" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last Name"
          defaultvalue="gangal"
        />
        <FormRow type="text" name="location" defaultvalue="mannheim" />
        <FormRow type="email" name="email" defaultvalue="ankush@gmail.com" />
        <FormRow type="password" name="password" defaultvalue="secret123" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <p>
          Already have an account?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default RegisterPage;