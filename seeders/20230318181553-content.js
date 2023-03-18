'use strict';
const { User, sequelize } = require('../models')
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const contents = await Promise.all(
      [...Array(400)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        return {
          title: faker.lorem.words(5),
          image: faker.lorem.words(1),
          synopsis: faker.lorem.words(10),
          review: faker.lorem.words(20),
          likes: faker.datatype.number({ min: 10, max: 100 }),
          postDate: faker.date.past(),
          user_id: user.id,
        }
      })
    )
    return queryInterface.bulkInsert('contents', contents)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contents', {})
  }
}




