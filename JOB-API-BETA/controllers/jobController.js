import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllJobs1 = async (req, res) => {
  const jobs = await Job.find({createdBy: req.user.userId});
  res.status(StatusCodes.OK).json({jobs});
}

export const getAllJobs = async (req, res) => {
  const {search,jobStatus, jobType ,sort}=req.query;

  const queryObject={
    createdBy: req.user.userId,
  };

  if (search){
    queryObject.$or =[
      {position:{$regex: search, $options: 'i'}},
      {company:{$regex: search, $options: 'i'}},
    ];
  }
  if (jobStatus && jobStatus !=='all'){
    queryObject.jobStatus=jobStatus;
  }
  if (jobType && jobType !=='all'){
    queryObject.jobType=jobType;
  }
  const sortOptions={
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'position',
    'z-a': '-position',
  }
  const sortKey=sortOptions[sort] || sortOptions.newest;

  console.log(queryObject);

 // setup pagination

 const page = Number(req.query.page) || 1;
 const limit = Number(req.query.limit) || 10;
 const skip = (page - 1) * limit;
 
 const jobs = await Job.find(queryObject).sort(sortKey).skip(skip).limit(limit);
// const jobs = await Job.find(queryObject);
// console.log({JOBS: jobs});

 const totalJobs = await Job.countDocuments(queryObject);
 const numOfPages = Math.ceil(totalJobs / limit);
 res
   .status(StatusCodes.OK)
   .json({ totalJobs, numOfPages, currentPage: page, jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  console.log("Request Body:", req.body);
  const job = await Job.create(req.body);
  console.log("Created Job:", job);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  console.log(req.file);
  const updateJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: "job modified", job: updateJob });
};

export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "job deleted", job: removedJob });
};
