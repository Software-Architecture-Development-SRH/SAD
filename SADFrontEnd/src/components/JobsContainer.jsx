import React from "react";
import Job from "./Job";
import Wrapper from "../assets/styles/JobsContainer";
import { useAllJobsContext } from "../Pages/AllJobs";

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;
  // when there are no jobs to show
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
        <p> Please add job in "Add Job" to display here</p>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;