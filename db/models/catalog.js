'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {
    static associate({ Comment, Basket }) {
      this.hasMany(Comment, { foreignKey: "catalogId" });
      this.hasMany(Basket, { foreignKey: "catalogId" });
      
    }
  }
  Catalog.init({
    category: DataTypes.STRING,
    img: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    attribute: DataTypes.STRING,
    hide:{
      type: DataTypes.ENUM('Y', 'N'),
      defaultValue: 'N'
    }
  }, {
    sequelize,
    modelName: 'Catalog',
  });
  return Catalog;
};