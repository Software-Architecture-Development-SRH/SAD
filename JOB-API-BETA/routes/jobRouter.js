import { Router } from "express";

const router = Router();
checkForTestUser

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

import {
  validateJobInput,
  validateIdParams,
} from "../middleware/validationMiddleware.js";

import {checkForTestUser} from '../middleware/authMiddleware.js';

router
.route("/")
.get(getAllJobs)
.post(checkForTestUser, validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParams, getJob)
  .patch(checkForTestUser, validateIdParams, validateJobInput, updateJob) // Reordered to validate ID first
  .delete(checkForTestUser, validateIdParams, deleteJob);

export default router;
