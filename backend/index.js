import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import route from "./route";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use("/", express.static(path.join(__dirname, "../frontend/build")));
app.use("/send", route);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
