const news = require('../models/news');

const getNews = (req, res) => {
  res.json(news);
};

module.exports = { getNews };