const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Kategori = sequelize.define(
  'Kategori',
  {
    id_kategori: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    nama_kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: 'kategori_kelas',
    timestamps: false,
  },
);

module.exports = Kategori;
