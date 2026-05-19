module.exports = {
  development: {
    dialect: 'postgres',
    host: '192.168.0.20',
    username: 'postgres',
    password: 'postgres',
    database: 'devburguer',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
