const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { sendVerificationEmail } = require('../utils/mailer');

// LOGIN
const login = async (payload) => {
  const { email, password } = payload;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error('INVALID_CREDENTIALS');
  }

  if (!user.is_verified) {
    throw new Error('EMAIL_NOT_VERIFIED');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('INVALID_CREDENTIALS');
  }

  const token = jwt.sign(
    {
      id_user: user.id_user,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN },
  );

  return {
    token,
    user: {
      id_user: user.id_user,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
    },
  };
};

// REGISTER
const register = async (payload) => {
  const { fullname, email, password, country_code, phone_number } = payload;

  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    throw new Error('EMAIL_ALREADY_USED');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const token = uuidv4();

  const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
    country_code,
    phone_number,
    role: 'student',
    verification_token: token,
    is_verified: false,
  });

  await sendVerificationEmail(email, token);

  return {
    id_user: user.id_user,
    fullname: user.fullname,
    email: user.email,
    country_code: user.country_code,
    phone_number: user.phone_number,
    role: user.role,
    is_verified: user.is_verified,
  };
};

// VERIFY EMAIL
const verifyEmail = async (token) => {
  const user = await User.findOne({
    where: { verification_token: token },
  });

  if (!user) {
    throw new Error('INVALID_VERIFICATION_TOKEN');
  }

  await User.update(
    {
      is_verified: true,
      verification_token: null,
    },
    {
      where: { id_user: user.id_user },
    },
  );

  return true;
};

module.exports = {
  register,
  login,
  verifyEmail,
};
