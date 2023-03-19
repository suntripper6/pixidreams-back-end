'use strict'
const { User, Comment, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const comments = await Promise.all(
      [...Array(10)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let content = await Content.findOne({
          order: sequelize.random(),
          where: { userId: { [Op.not]: user.id } },
          raw: true
        })
        return {
          content: falso.randParagraph(),
          likes: falso.randNumber({ min: 0, max: 40000 }),
          user_id: user.id,
          content_id: content.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('comments', comments)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments')
  }
}
