import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import sendEmail from "./controllers/sendEmail";
import verifyCaptcha from "./controllers/verifyCaptcha";
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.post("/submit", verifyCaptcha, sendEmail);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
