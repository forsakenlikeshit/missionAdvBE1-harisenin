const response = require('../utils/response');

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return response(res, 400, 'No file uploaded');
    }

    return response(res, 200, 'File uploaded successfully', {
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`,
    });
  } catch (err) {
    console.log('UPLOAD ERROR:', err);

    return response(res, 500, 'Internal server error');
  }
};

module.exports = {
  uploadImage,
};
