const { User, Content, Comment } = require('../models')

const GetAllComments = async (req, res) => {
    try {
      const comments = await Content.findAll()
      res.send(comments)
    } catch (error) {
      throw error
    }
  }
  
const GetComment = async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.comment_id)
      res.send(comment)
    } catch (error) {
      throw error
    }
  }
  
const CreateComment = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      let commentBody = {
        userId,
        ...req.body
      }
      let comment = await Comment.create(commentBody)
      res.send(comment)
    } catch (error) {
      throw error
    }
  }
  
const UpdateComment = async (req, res) => {
    try {
      let commentId = parseInt(req.params.comment_id)
      let updatedComment = await Comment.update(req.body, {
        where : { id: commentId},
        returning: true
      })
      res.send(updatedComment)
    } catch (error) {
      throw error
    }
  }
  
const DeleteComment = async (req, res) => {
    try {
      let commentId = parseInt(req.params.comment_id)
      await Comment.destroy({
        where: { id: commentId }
      })
      res.send(`deleted comment id ${commentId}`)
    } catch (error) {
      throw error
    }
  }

module.exports = {
    GetAllComments,
    GetComment,
    CreateComment,
    UpdateComment,
    DeleteComment
}