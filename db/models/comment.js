'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Catalog }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Catalog, { foreignKey: "catalogId" });
    }
  }
  Comment.init({
    estimation: {
    type: DataTypes.INTEGER,
    validate: {
      max: 5,
      min: 0
    }
    },
    comment: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, references: 'Users' },
    catalogId: { type: DataTypes.INTEGER, references: 'Catalogs' },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};