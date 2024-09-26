exports.seed = function(knex, Promise) {
    return knex('steps').insert([
        { step_number: 1, step_instructions: 'Get some dough', recipe_id: 1 },
        { step_number: 2, step_instructions: 'Put the marinara on the dough', recipe_id: 1 },
        { step_number: 3, step_instructions: 'Put cheese literally everywhere', recipe_id: 1 },
        { step_number: 4, step_instructions: 'Cook that sucker for like 20 minutes', recipe_id: 1 },

        { step_number: 1, step_instructions: 'Buy a not crappy steak', recipe_id: 2 },
        { step_number: 2, step_instructions: 'Fire up some coals', recipe_id: 2 },
        { step_number: 3, step_instructions: 'Salt and pepper the crap out of the steak', recipe_id: 2 },
        { step_number: 4, step_instructions: 'Sear that sucker till internal temp is 125º', recipe_id: 2 },
    ])
}