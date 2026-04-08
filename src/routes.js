import { Router } from 'express';
import multer from 'multer';
import CategoryController from './app/models/controllers/CategoryController.js';
import ProductController from './app/models/controllers/ProductController.js';
import SessionController from './app/models/controllers/SessionController.js';
import UserController from './app/models/controllers/UserController.js';
import multerConfig from './config/multer.cjs';
import authMiddleware from './middlewares/auth.js';


const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware)
routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);

routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);

export default routes;
