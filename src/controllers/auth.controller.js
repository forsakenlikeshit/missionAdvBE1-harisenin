const response = require('../utils/response');
const authService = require('../services/auth.service');

// LOGIN
const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    return response(res, 200, 'Login success', data);
  } catch (err) {
    if (err.message === 'INVALID_CREDENTIALS') {
      return response(res, 401, 'Invalid email or password');
    }

    if (err.message === 'EMAIL_NOT_VERIFIED') {
      return response(res, 403, 'Email not verified');
    }

    console.log('LOGIN ERROR:', err);
    return response(res, 500, 'Internal server error');
  }
};

// REGISTER
const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);

    return response(res, 201, 'Register success', {
      id_user: user.id_user,
      fullname: user.fullname,
      email: user.email,
    });
  } catch (err) {
    if (err.message === 'EMAIL_ALREADY_USED') {
      return response(res, 409, 'Email already used');
    }

    console.log('REGISTER ERROR:', err);
    return response(res, 500, 'Internal server error');
  }
};

// VERIFY EMAIL
const verifyEmail = async (req, res) => {
  try {
    await authService.verifyEmail(req.query.token);
    return response(res, 200, 'Email Verified Successfully');
  } catch (err) {
    if (err.message === 'INVALID_VERIFICATION_TOKEN') {
      return response(res, 400, 'Invalid Verification Token');
    }

    console.log('VERIFY ERROR:', err);
    return response(res, 500, 'Internal server error');
  }
};

module.exports = {
  register,
  login,
  verifyEmail,
};
