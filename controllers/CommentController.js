const { Comment, User, Content } = require('../models')


const GetAllComments = async (req, res) => {
    try {
      const comments = await Comment.findAll()
      res.send(comments)
    } catch (error) {
      throw error
    }
  }








module.exports = {
    
    GetAllComments
   
    
}