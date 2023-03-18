'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Content.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    review: DataTypes.STRING,
    postDate: DataTypes.DATE,
    likes: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Content',
    tableName: 'contents'
  });
  return Content;
};