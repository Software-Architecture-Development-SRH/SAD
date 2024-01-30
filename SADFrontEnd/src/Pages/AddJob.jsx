import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/styles/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import {
  JOB_STATUS,
  JOB_TYPE,
} from "E:/trial/SAD/SADFrontEnd/src/Utils/constants.js";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch2 from "../Utils/customFetch2";
import DOMPurify from "dompurify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch2.post("/jobs", data);
    toast.success("Job added successfully !");
    return redirect("AllJobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddJob = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Get the sanitized link using DOMPurify
    const sanitizedLink = DOMPurify.sanitize(formData.get("jobLink"));

    // Rest of your form submission logic...
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add your job here :</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={user.location}
          />
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
          />
          <FormRow
            type="date"
            labelText="Add Date"
            name="jobDate"
            defaultValue="YYYY-MM-DD"
          />
          <FormRow
            type="text"
            labelText="Add your job link"
            name="jobLink"
            placeholder="Paste your link here"
          />
          <FormRow
            type="textarea"
            labelText="Add Note"
            name="jobNote"
            rows={9}
            defaultValue="Type here"
          />
          <button
            type="submit"
            className="btn btn-block form-btn "
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting..." : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;