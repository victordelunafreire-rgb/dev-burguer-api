import { Router } from 'express';
import multer from 'multer';
import adminMiddleware from './app/middlewares/admin.js';
import authMiddleware from './app/middlewares/auth.js';
import CategoryController from './app/models/controllers/CategoryController.js';
import OrderController from './app/models/controllers/OrderController.js';
import ProductController from './app/models/controllers/ProductController.js';
import SessionController from './app/models/controllers/SessionController.js';
import CreatePaymentIntent from './app/models/controllers/Stripe/CreatePaymentIntentController.js';
import UserController from './app/models/controllers/UserController.js';
import multerConfig from './config/multer.cjs';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post(
  '/products',
  adminMiddleware,
  upload.single('file'),
  ProductController.store,
);
routes.put(
  '/products/:id',
  adminMiddleware,
  upload.single('file'),
  ProductController.update,
);
routes.get('/products', ProductController.index);

routes.post(
  '/categories',
  adminMiddleware,
  upload.single('file'),
  CategoryController.store,
);
routes.put(
  '/categories/:id',
  adminMiddleware,
  upload.single('file'),
  CategoryController.update,
);
routes.get('/categories', CategoryController.index);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', adminMiddleware, OrderController.update);

routes.post('/create-payment-intent', CreatePaymentIntent.store);

export default routes;
