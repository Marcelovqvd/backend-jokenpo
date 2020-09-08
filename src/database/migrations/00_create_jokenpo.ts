import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('games', table => {
    table.increments('id').primary();
    table.string('playerOne').notNullable();
    table.string('playerTwo').notNullable();
    table.string('playerOnePlay').notNullable();
    table.string('playerTwoplay').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('games');
}