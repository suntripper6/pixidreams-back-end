const Router = require('express').Router()
const controller = require('../controllers/CommentController')


Router.get('/', controller.GetAllComments)







module.exports = Router