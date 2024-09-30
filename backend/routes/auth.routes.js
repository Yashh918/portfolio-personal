import { Router } from "express";
import { verifyJwt } from "../controllers/auth.controllers.js";

const router = Router()

router
    .route('/')
    .get(verifyJwt)

export default router