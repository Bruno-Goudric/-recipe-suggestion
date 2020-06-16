const express = require('express')

const RecipesController = require('./controllers/Recipe')

const routes = express.Router()

routes.get('/recipes', RecipesController.index)
routes.post('/recipes', RecipesController.post)
routes.put('/recipes/:id', RecipesController.put)
routes.delete('/recipes/:id', RecipesController.delete)

module.exports = routes