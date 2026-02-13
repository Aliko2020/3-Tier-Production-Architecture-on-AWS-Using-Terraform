exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();

    table.string("username", 100)
      .unique()
      .notNullable();

    table.string("email", 255)
      .unique()
      .notNullable();

    table.string("password", 255)
      .notNullable();

    table.timestamp("created_at")
      .defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
