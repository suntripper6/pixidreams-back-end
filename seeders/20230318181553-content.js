'use strict'
const { User, sequelize } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const contents = await Promise.all(
      [...Array(400)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        return {
          title: falso.words(5),
          image: falso.words(1),
          synopsis: falso.words(10),
          review: falso.words(20),
          postDate: new Date(),
          likes: falso.integer(10, 100),
          user_id: user.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('contents', contents)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contents', {})
  }
}
