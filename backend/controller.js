
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

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

const sendMessage = (req, res) => {
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
};

export default sendMessage;