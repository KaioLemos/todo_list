/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').truncate()
  await knex('todos').insert([
    {
      message: 'This is a test message lol'
    },
    {
      message: 'update address'
    },
    {
      message: 'take a shower'
    },
    {
      message: 'brag for my television'
    }
  ]);
};
