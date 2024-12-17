import express from "express";
import { createJob, getJobs, updateJob, deleteJob, getJob } from "../Controller/job.controller.js";

const router = express.Router();

router.get("/", getJobs);
router.get("/:id", getJob)
router.post("/", createJob);
router.delete("/:id", deleteJob);
router.put("/:id", updateJob);

export default router;