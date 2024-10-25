import { Router } from "express";
import { ping } from "../controllers/ping.controller.js";

const router = Router()

router
    .route('/')
    .get(ping)

export default router