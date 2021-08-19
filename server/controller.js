import dotenv from "dotenv";
dotenv.config();

const sendEmail = (req, res) => {
  //const { name, email, subject, message } = req.body;
  res.send({
    message: "Email sent successfully",
  });
};
export default sendEmail;
