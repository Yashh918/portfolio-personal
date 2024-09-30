import { Router } from "express";
import { sendMail } from "../controllers/mail.controllers.js";
import { contactLimiter } from "../middlewares/rateLimit.middleware.js";

const router = Router()

router
    .route('/')
    .post(contactLimiter, sendMail)

export default router