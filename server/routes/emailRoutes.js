import express from "express";
import {sendEmail} from "../models/mailer.js"

const router = express.Router();

router.post("/send-email",sendEmail);

export default router;