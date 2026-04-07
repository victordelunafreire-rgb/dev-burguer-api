module.exports = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    username: 'admin',
    password: '191657',
    database: 'dev-burguer-db',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
}