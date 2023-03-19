const Router = require('express').Router()
const controller = require('../controllers/CommentController')



Router.get('/', controller.GetAllComments)
Router.get('/view/:comment_id', controller.GetComment)
Router.post('/:user_id', controller.CreateComment)
Router.put('/:comment_id', controller.UpdateComment)
Router.delete('/:comment_id', controller.DeleteComment)







module.exports = Router