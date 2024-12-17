import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./Config/db.js";
import Job from "./models/job.product.js";

dotenv.config();

const app = express();

app.use(express.json());

//fetching all jobs
app.get("/api/jobs", async (req, res) => {
    try {
        const data = await Job.find({});
        res.status(200).json(data);
    } catch (error) {
        console.log(`Error in fetching data`);
        res.status(500).json({success:false, message:"Error in fetching data"});
    }
})

//adding a job
app.post("/api/jobs", async (req, res) => {
    const job = req.body;

    const newJob = new Job(job);
    try {
        await newJob.save();
        res.status(201).json({success:true, data:newJob});
    } catch (error) {
        console.log(`Error in creating product: ${error}`);
        res.status(500).json({success: false, message: "Server Error"});
    }

})

app.listen(5000, () => {
    try {
        console.log(`Server running on port http://localhost:5000`);
        connectToDB();
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})