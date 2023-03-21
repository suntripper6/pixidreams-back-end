const { User, Content, Comment } = require('../models')

const GetUser = async (req,res) => {
    try {
      const customers = await User.findAll()
      res.send(customers)  
    } catch (error) {
        throw error
    }
}

const CreateUser = async (req, res) => {
    try {
      let userBody = {
        ...req.body
      }
      let user = await User.create(userBody)
      res.send(user)
    } catch (error) {
      throw error
    }
  }

const UpdateUser = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      let updatedUser = await Customer.update(req.body, {
        where : { id: userId},
        returning: true
      })
      res.send(updatedUser)
    } catch (error) {
      throw error
    }
  }

const DeleteUser = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      await User.destroy({
        where: { id: userId }
      })
      res.send(`deleted twert id ${userId}`)
    } catch (error) {
      throw error
    }
  }

module.exports = {
    GetUser,
    CreateUser,
    UpdateUser,
    DeleteUser
}