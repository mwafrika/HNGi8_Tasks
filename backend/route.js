import { Router } from "express";
import sendMessage from "./controller";

const router = Router().post("/", sendMessage);

export default router;
