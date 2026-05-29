const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tutor = sequelize.define(
  'Tutor',
  {
    id_tutor: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    profession: {
      type: DataTypes.STRING,
    },

    company: {
      type: DataTypes.STRING,
    },

    avatar: {
      type: DataTypes.TEXT,
    },

    bio: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: 'tutor',
    timestamps: false,
  },
);

module.exports = Tutor;
