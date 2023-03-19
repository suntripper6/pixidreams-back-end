const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ContentRouter = require('./ContentRouter')
const CommentRouter = require('./CommentRouter')
Router.use('/users', UserRouter)
Router.use('/posts', ContentRouter)
Router.use('/comments', CommentRouter)
module.exports = Router