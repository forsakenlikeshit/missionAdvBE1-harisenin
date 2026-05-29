const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = async (email, token) => {
  const url = `http://localhost:3000/auth/verify-email?token=${token}`;

  const info = await transporter.sendMail({
    from: '"videobelajar" <no-reply@educourse.com>',
    to: email,
    subject: 'Verify Your Email',
    html: `
      <h2>Verify your account</h2>
      <p>Click link below:</p>
      <a href="${url}">${url}</a>
    `,
  });

  console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
};

module.exports = { sendVerificationEmail };
