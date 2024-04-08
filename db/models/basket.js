'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ User, Catalog }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Catalog, { foreignKey: "catalogId" });
    }
  }
  Basket.init({
    userId: { type: DataTypes.INTEGER, references: 'Users' },
    catalogId: { type: DataTypes.INTEGER, references: 'Catalogs' },
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};