'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flight.belongsTo(models.Airport, {
        as: 'from',
        foreignKey: 'from_airport_id',
      }),
      Flight.belongsTo(models.Airport, {
        as: 'to',
        foreignKey: 'to_airport_id',
      }),
      Flight.belongsTo(models.Plane, {
        foreignKey: 'plane_id',
      }),
      Flight.hasMany(models.Ticket, {
        as: 'departure_plane',
        foreignKey: 'flight_id'
      })
      Flight.hasMany(models.Ticket, {
        as: 'return_plane',
        foreignKey: 'return_flight_id'
      })
    }
  }
  Flight.init(
    {
      plane_id: DataTypes.INTEGER,
      from_airport_id: DataTypes.INTEGER,
      to_airport_id: DataTypes.INTEGER,
      arrival_time: DataTypes.DATE,
      departure_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Flight',
    }
  );
  return Flight;
};
