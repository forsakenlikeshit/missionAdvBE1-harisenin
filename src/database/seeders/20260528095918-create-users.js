'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('admin123', 10);

    await queryInterface.bulkInsert('users', [
      {
        fullname: 'Admin',
        email: 'admin@videobelajar.com',
        password: hashedPassword,
        country_code: '+62',
        phone_number: '800000000',
        role: 'admin',
        is_verified: true,
        verification_token: null,

        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', {
      email: 'admin@videobelajar.com',
    });
  },
};
