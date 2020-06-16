const db = require('../config/db')

module.exports = {
  all(){
    return db.query(`
      SELECT * FROM recipes
    `)
  },
  post(data){
    const query = `
      INSERT INTO recipes(
        title,
        description,
        quantity,
        dosage
      ) VALUES($1, $2, $3, $4)
      RETURNING id
    `
    const values =[
      data.title,
      data.description,
      data.quantity,
      data.dosage
    ]

    return db.query(query, values)
  },
  update(data){
    const query = `
      UPDATE recipes SET
        title=($1),
        description=($2),
        quantity=($3),
        dosage=($4)
        where id=$5
    `
   
    const values = [
      data.title,
      data.description,
      data.quantity,
      data.dosage,
      data.id
    ]

    return db.query(query, values)

  },
  delete(id){
    return db.query('DELETE FROM recipes WHERE id = $1', [id])
  }
}