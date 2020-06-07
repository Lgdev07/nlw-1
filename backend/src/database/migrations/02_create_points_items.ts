import Knex from 'knex';

export function up(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable('points_items', table => {
    table.increments('id').primary();
    
    table.integer('point_id')
      .notNullable()
      .references('id')
      .inTable('points');
    
    table.integer('item_id')
      .notNullable()
      .references('id')
      .inTable('items');
  });

}

export function down(knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable('points_items');

}