import Knex from 'knex';


export async function up(knex: Knex) {
  return knex.schema.createTable('user', table =>{
    table.string('name').notNullable();
    table.string('email').primary().notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
  });
}


export async function down(knex: Knex) {
  return knex.schema.dropTable('user');
}

