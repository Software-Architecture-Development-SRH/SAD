import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from 'dayjs';

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs });
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

export const showStats = async (req, res) => {
  let stats = await Job.aggregate([
{$match: { createdBy: new mongoose.Types.ObjectId(req.user.userId)}},
{$group: { _id: '$jobStatus', count: { $sum:1 } } },
]);
stats = stats.reduce((acc,curr) => {
const {_id:title,count} = curr
acc[title] = count;
return acc;
},{});

  const defaultStats = {
    pending: stats.pending || 0,
    interview : stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: {createdBy: new mongoose.Types.ObjectId(req.user.userId)}},
    {
      $group:{
        _id: {year: {$year: '$jobDate' } , month: { $month:
        '$jobDate' }},
        count: { $sum:1 },
      },
    },
    {$sort: {'_id.year': -1, '_id.month' : -1} },
    // { $limit : 6 },
  ]);

  monthlyApplications = monthlyApplications.map((item)=>{
    const {_id:{year,month}, count} = item;

    const date = day()
    .month(month-1)
    .year(year)
    .format('YYYY-MM');

    return {date, count};
  }).reverse();

  // let monthlyApplications = [{
  //   date: 'Sep 23',
  //   count: 12,
  // },
  // {
  //   date: 'Oct 23',
  //   count: 12,
  // },
  // {
  //   date: 'Nov 23',
  //   count: 12,
  // }];
  res.status(StatusCodes.OK).json({defaultStats,monthlyApplications});
};