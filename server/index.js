import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";
import {dirname} from "path";
const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "../frontend/build")));
app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", (req, res) => {
  const { name, email, message, subject } = req.body;
  let mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from: ${email}`,
    text: `${message}`,
    name: `${name}`,
    objet: `${subject}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
      console.log("Email sent successfully");
    }
  });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
