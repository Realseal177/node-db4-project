exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', (table) => {
        table.increments('recipe_id')
        table.string('recipe_name', 128).notNullable()
        table.timestamp('created_at', 128).notNullable()
    })
    .createTable('steps', (table) => {
        table.increments('steps_id')
    })
    .createTable('ingredients', (table) => {
        table.increments('ingredients_id')
    })
    .createTable('recipe-steps', (table) => {
        table.increments('recipe_steps_id')
    })
};


exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
