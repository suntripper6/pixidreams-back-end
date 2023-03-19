'use strict'
const { User, sequelize } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const contents = await Promise.all(
      [...Array(400)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        return {
          title: falso.randMovie(),
          image: falso.randImg(),
          synopsis: falso.randParagraph(),
          review: falso.randParagraph(),
          likes: falso.randNumber({ min: 0, max: 40000 }),
          post_date: falso.randPastDate(),
          user_id: user.id,
        }
      })
    )
    return queryInterface.bulkInsert('contents', contents)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contents')
  }
}





