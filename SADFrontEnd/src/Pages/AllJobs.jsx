import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch2 from "../Utils/customFetch2";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch2.get("/jobs");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobsContext = createContext();
const AllJobs = () => {
  const { data } = useLoaderData();
  return (
    <>
      <AllJobsContext.Provider value={{ data }}>
        <SearchContainer />
        <JobsContainer />
      </AllJobsContext.Provider>
    </>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;
