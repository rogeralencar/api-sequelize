const express = require('express')
const StudiesController = require('./controllers/StudiesController')

const routes = express.Router()

routes.post('/studies', StudiesController.store)
routes.get('/liststudies', StudiesController.list)
routes.delete('/deletestudy/:id', StudiesController.delete)
routes.put('/updatestudy/:id', StudiesController.update)

module.exports = routes