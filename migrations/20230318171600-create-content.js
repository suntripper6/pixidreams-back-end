"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      synopsis: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      review: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      post_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "user_id",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("contents");
  },
};
