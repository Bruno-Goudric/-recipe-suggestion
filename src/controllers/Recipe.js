const Recipe = require('../models/Recipe')

module.exports = {
  async index(req, res){
    const recipes = await Recipe.all()

    return res.json(recipes.rows)
  },
  async post(req, res){
    const keys = Object.keys(req.body)

    for(key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }

    let results = await Recipe.post(req.body)

    const recipeId = results.rows[0].id

    return res.json( recipeId )
    
  },
  async put(req, res){
   
   await Recipe.update(req.body)   
   
    return res.json(req.body.id)    
  },
  async delete(req, res){
    await Recipe.delete(req.body.id)

    return res.status(204).send()
  }
  
}