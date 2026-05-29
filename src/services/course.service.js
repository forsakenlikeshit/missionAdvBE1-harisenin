const { Course, Tutor, Kategori, Review } = require('../models');
const { Op, fn, col } = require('sequelize');

const getAllCourses = async (query) => {
  const { search, kategori, sort = 'title', order = 'ASC' } = query;

  const where = {};

  // SEARCH
  if (search) {
    where[Op.or] = [
      {
        title: {
          [Op.like]: `%${search}%`,
        },
      },
      {
        description: {
          [Op.like]: `%${search}%`,
        },
      },
    ];
  }

  // FILTER
  if (kategori) {
    where.id_kategori = kategori;
  }

  // SORT
  const allowedSortFields = ['price', 'title', 'rating'];

  const safeOrder = String(order).toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

  let orderQuery = [];

  if (allowedSortFields.includes(sort)) {
    if (sort === 'rating') {
      orderQuery = [[fn('AVG', col('Reviews.rating')), safeOrder]];
    } else {
      orderQuery = [[sort, safeOrder]];
    }
  } else {
    orderQuery = [['title', 'ASC']];
  }

  return await Course.findAll({
    where,

    attributes: [
      'id_kelas',
      'title',
      'description',
      'thumbnail',
      'price',

      [fn('ROUND', fn('AVG', col('Reviews.rating')), 1), 'rating'],

      [fn('COUNT', col('Reviews.id_review')), 'total_review'],
    ],

    include: [
      {
        model: Tutor,
      },
      {
        model: Kategori,
      },
      {
        model: Review,
        attributes: [],
      },
    ],

    group: ['Course.id_kelas', 'Tutor.id_tutor', 'Kategori.id_kategori'],

    order: orderQuery,
  });
};

const getCourseById = async (id) => {
  return await Course.findByPk(id, {
    include: [Tutor, Kategori, Review],
  });
};

const createCourse = async (data) => {
  return await Course.create(data);
};

const updateCourse = async (id, data) => {
  return await Course.update(data, {
    where: { id_kelas: id },
  });
};

const deleteCourse = async (id) => {
  return await Course.destroy({
    where: { id_kelas: id },
  });
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
