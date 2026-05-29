const sequelize = require('../config/database');
const Tutor = require('./tutor');
const Course = require('./course');
const Kategori = require('./kategori');
const Review = require('./review');
const User = require('./user');

// TUTOR - COURSE
Tutor.hasMany(Course, {
  foreignKey: 'id_tutor',
});

Course.belongsTo(Tutor, {
  foreignKey: 'id_tutor',
});

// KATEGORI - COURSE

Kategori.hasMany(Course, {
  foreignKey: 'id_kategori',
});

Course.belongsTo(Kategori, {
  foreignKey: 'id_kategori',
});

// COURSE - REVIEW

Course.hasMany(Review, {
  foreignKey: 'id_kelas',
});

Review.belongsTo(Course, {
  foreignKey: 'id_kelas',
});

module.exports = {
  sequelize,
  User,
  Tutor,
  Course,
  Kategori,
  Review,
};
