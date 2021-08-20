import { Router } from "express";
import sendMessage from "./controller";

const router = Router().post("/send", sendMessage);

export default router;
