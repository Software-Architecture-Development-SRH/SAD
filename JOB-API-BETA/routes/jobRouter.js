import { Router } from 'express';
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';

import { validateJobInput, validateIdParams } from '../middleware/validationMiddleware.js';

// router.get('/', getAllJobs);
// router.post('/', createJob);

router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router.route('/:id')
  .get(validateIdParams, getJob)
  .patch(validateJobInput, validateIdParams, updateJob)
  .delete(validateIdParams, deleteJob);

export default router;