const Router = require('express').Router()
const controller = require('../controllers/ContentController')


Router.get('/', controller.GetAllContents)
Router.get('/view/:content_id', controller.GetContent)
Router.post('/:user_id', controller.CreateContent)
Router.put('/:content_id', controller.UpdateContent)
Router.delete('/:content_id', controller.DeleteContent)

module.exports = Router