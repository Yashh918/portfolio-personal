import { Router } from "express";
import { sendMail } from "../controllers/mail.controllers.js";
import { contactLimiter } from "../middlewares/rateLimit.middleware.js";
import { authenticateApiKey } from "../middlewares/apiKey.middlewares.js";

const router = Router()

router
    .route('/')
    .post(authenticateApiKey, contactLimiter, sendMail)

export default router