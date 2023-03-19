"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    static associate(models) {
      Content.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "contents",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Content.hasMany(models.Comment, {
        foreignKey: "content_id",
        as: "comments",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Content.init(
    {
      title: DataTypes.STRING(500),
      image: DataTypes.STRING(500),
      synopsis: DataTypes.STRING(500),
      review: DataTypes.STRING(500),
      post_date: DataTypes.DATE,
      likes: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Content",
      tableName: "contents",
    }
  );
  return Content;
};
