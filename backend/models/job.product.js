import mongoose from "mongoose";

const comapnySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contact_email: {
        type: String,
        required: true
    },
    contact_phone: {
        type: String,
        required: false
    }
})

const jobSchema = new mongoose.Schema({
    type:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    salary_range: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    company: comapnySchema,
}, {
    timestamps: true
})

const Job = mongoose.model('Job', jobSchema);

export default Job;