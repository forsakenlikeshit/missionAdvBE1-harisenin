const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Review = sequelize.define(
  'Review',
  {
    id_review: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    id_kelas: {
      type: DataTypes.INTEGER,
    },

    reviewer_name: {
      type: DataTypes.STRING,
    },

    rating: {
      type: DataTypes.INTEGER,
    },

    comment: {
      type: DataTypes.TEXT,
    },

    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'review',
    timestamps: false,
  },
);

module.exports = Review;
