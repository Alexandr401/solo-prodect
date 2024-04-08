'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment, Basket, Order }) {
      this.hasMany(Comment, { foreignKey: "userId" });
      this.hasMany(Basket, { foreignKey: "userId" });
      this.hasMany(Order, { foreignKey: "userId" });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    adresse: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};