import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./Config/db.js";
import router from "./routes/job.route.js";
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.use("/api/jobs", router)


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
    connectToDB();
})