const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define(
  'Course',
  {
    id_kelas: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    id_tutor: {
      type: DataTypes.INTEGER,
    },

    id_kategori: {
      type: DataTypes.INTEGER,
    },

    thumbnail: {
      type: DataTypes.TEXT,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    tableName: 'produk_kelas',
    timestamps: false,
  },
);

module.exports = Course;
