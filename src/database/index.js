import mongoose from 'mongoose';
import { Sequelize } from 'sequelize';
import Category from '../app/models/Category.js';
import Product from '../app/models/Product.js';
import User from '../app/models/user.js';
import databaseConfig from '../config/database.cjs';

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig.development);
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models),
    );
  }

  mongo() {
    this.mongooseConnection = mongoose.connect(
      'mongodb://192.168.0.20/devburguer',
    );
  }
}

export default new Database();
