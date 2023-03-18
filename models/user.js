'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Content, {
        foreignKey: 'user_id',
        as: 'contents',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      User.hasMany(models.Comment, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};