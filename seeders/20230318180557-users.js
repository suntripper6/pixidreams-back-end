'use strict'
const falso = require('@ngneat/falso')
const users = [...Array(10)].map(() => ({
  name: falso.randFirstName(),
  email: falso.randEmail(),
  password: falso.randPassword(),
  createdAt: new Date(),
  updatedAt: new Date()
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users')
  }
}