const nodemailer = require('nodemailer');

let testAccount;
let transporter;

const initTransport = async () => {
  if (!transporter) {
    testAccount = await nodemailer.createTestAccount();

    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  return transporter;
};

const sendVerificationEmail = async (email, token) => {
  const transporter = await initTransport();

  const verificationLink = `http://localhost:${process.env.SERVER_PORT}/auth/verify-email?token=${token}`;

  const info = await transporter.sendMail({
    from: '"EduCourse Dev" <no-reply@educourse.com>',
    to: email,
    subject: 'Verify Your Email',
    html: `
      <h2>Email Verification</h2>
      <p>Click link below to verify your account:</p>
      <a href="${verificationLink}">
        Verify Email
      </a>
    `,
  });

  console.log('Email sent!');
  console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
};

module.exports = {
  sendVerificationEmail,
};
