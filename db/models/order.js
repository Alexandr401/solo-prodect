'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }
  Order.init({
    userId: { type: DataTypes.INTEGER, references: 'Users' },
    items: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    totalPrice: DataTypes.INTEGER,
    payment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};