const nodemailer = require("nodemailer");

const sendEmail = async (option) => {
  const transporter = nodemailer.createTransport({
    host: "smtp@gmail.com",
    port: 587,
    secure:false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Node auth manaher",
    to: option.email,
    subject: option.subject,
    text: option.message,
    
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;