import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./Config/db.js";
import Job from "./models/job.product.js";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/api/jobs", async (req, res) => {
    const job = req.body;

    const newJob = new Job(job);
    // res.json(newJob);

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