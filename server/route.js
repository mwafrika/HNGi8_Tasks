import { Router } from "express";
import sendEmail from "./controller";

const router = Router().post("/sendEmail", sendEmail);

export default router;
