import Job from "../models/job.product.js"

export const getJobs = async (req, res) => {
    try {
        const data = await Job.find({});
        res.status(200).json(data);
    } catch (error) {
        console.log(`Error in fetching data`);
        res.status(500).json({success:false, message:"Error in fetching data"});
    }
}

export const createJob = async (req, res) => {
    const job = req.body;

    const newJob = new Job(job);
    try {
        await newJob.save();
        res.status(201).json({success:true, data:newJob});
    } catch (error) {
        console.log(`Error in creating product: ${error}`);
        res.status(500).json({success: false, message: "Server Error"});
    }

}

export const updateJob = async (req, res) => {
    const {id} = req.params;
    const job = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false, message:"Invalid Id, Please try again"});
    }

    try {
        const updatedJob = await Job.findByIdAndUpdate(id, job, {new:true});
        res.status(200).json({success:true, data:updatedJob});
    } catch (error) {
       console.log(error);
       res.status(500).json({success:false, message:"Error in Updating Job"}) 
    }  
}

export const deleteJob = async (req, res) => {
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
}