const { Promo } = require('../models');

module.exports = {
  create(body) {
    return Promo.create(body);
  },
};