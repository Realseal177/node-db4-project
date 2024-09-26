exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        { recipe_name: 'Pizza', created_at: '20220217' },
        { recipe_name: 'Steak', created_at: '20220218' }
    ])
}