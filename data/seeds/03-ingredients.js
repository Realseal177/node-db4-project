exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        { ingredient_name: 'Dough', quantity_in_oz: 16, recipe_id: 1 },
        { ingredient_name: 'Marinara', quantity_in_oz: 6, recipe_id: 1 },
        { ingredient_name: 'Cheese', quantity_in_oz: 32, recipe_id: 1 },

        { ingredient_name: 'Steak', quantity_in_oz: 16, recipe_id: 2 },
        { ingredient_name: 'Salt', quantity_in_oz: 0.5, recipe_id: 2 },
        { ingredient_name: 'Pepper', quantity_in_oz: 0.5, recipe_id: 2 },
    ])
}