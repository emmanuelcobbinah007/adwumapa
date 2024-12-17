import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./Config/db.js";
import Job from "./models/job.product.js";
import { useParams } from "react-router-dom";
import mongoose from "mongoose";

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

//deleting a job
app.delete("/api/jobs/:id", async (req, res) => {
    const {id} = req.params;

     if(!mongoose.Types.ObjectId.isValid(id)) {
         return res.status(404).json({success:false, message:"Invalid Id, Please try again"})
     }

    try {
        await Job.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Job deleted"})
    } catch (error) {
        console.log("Error in deleting data");
        res.status(500).json({success:false, message:"Error in deleting data"})
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