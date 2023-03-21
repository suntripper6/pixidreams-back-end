const { User, Content, Comment } = require('../models')

const GetAllContents = async (req, res) => {
    try {
      const contents = await Content.findAll()
      res.send(contents)
    } catch (error) {
      throw error
    }
  }
  
const GetContent = async (req, res) => {
    try {
      const content = await Content.findByPk(req.params.content_id)
      res.send(content)
    } catch (error) {
      throw error
    }
  }
  
const CreateContent = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      let contentBody = {
        userId,
        ...req.body
      }
      let content = await Content.create(contentBody)
      res.send(content)
    } catch (error) {
      throw error
    }
  }
  
const UpdateContent = async (req, res) => {
    try {
      let contentId = parseInt(req.params.content_id)
      let updatedContent = await Content.update(req.body, {
        where : { id: contentId},
        returning: true
      })
      res.send(updatedContent)
    } catch (error) {
      throw error
    }
  }
  
const DeleteContent = async (req, res) => {
    try {
      let contentId = parseInt(req.params.content_id)
      await Content.destroy({
        where: { id: contentId }
      })
      res.send(`deleted twert id ${contentId}`)
    } catch (error) {
      throw error
    }
  }

module.exports = {
    GetAllContents,
    GetContent,
    CreateContent,
    UpdateContent,
    DeleteContent
}