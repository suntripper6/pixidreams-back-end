const { Comment, User, Content } = require('../models')


const GetAllComments = async (req, res) => {
    try {
      const comments = await Comment.findAll()
      res.send(comments)
    } catch (error) {
      throw error
    }
  }

const GetRecentComment = async (req, res) => {
  try {
    const recent = await Comment.findAll({ order: [['created_at', 'DESC']] })
    res.send(recent)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let twertId = parseInt(req.params.twert_id);
    let commentBody = {
      twertId,
      ...req.body,
    };
    let comment = await Comment.create(commentBody);
    res.send(comment);
  } catch (error) {
    throw error;
  }
};

const UpdateComment = async(req,res) => {
  try{
    let commentId = parseInt(req.params.comment_id)
    let updatedComment = await Comment.update(req.body, {
      where: {id: commentId},
      returning: true
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}
const DeleteComment = async(req,res) => {
  try{
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({where: {id: commentId}})
    res.send(`deleted comment id ${commentId}`)
  } catch (error) {
    throw error
  }
}






// Dont forget to export your functions
module.exports = {
    
    GetAllComments,
    // GetRecentComment,
    // CreateComment,
    // UpdateComment,
    // DeleteComment,
    
}