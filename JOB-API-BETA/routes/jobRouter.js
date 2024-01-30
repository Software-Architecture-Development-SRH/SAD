import { Router } from "express";
const router = Router();

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

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParams, getJob)
  .patch(validateIdParams, validateJobInput, updateJob) // Reordered to validate ID first
  .delete(validateIdParams, deleteJob);

export default router;
