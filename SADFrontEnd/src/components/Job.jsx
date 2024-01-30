import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/styles/Job";
import JobInfo from "./JobInfo";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const Job = ({}) => {
  return <h3>Job</h3>;
};

export default Job;
