const { Airport } = require('../models');

module.exports = {
  create(body) {
    return Airport.create(body);
  },

  update(id, body) {
    return Airport.update(body, { where: { id } });
  },
};
