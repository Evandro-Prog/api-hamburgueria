import { Router } from 'express'; // Importing the Router from Express
import multer from 'multer';
import authMiddleware from '../src/app/middlewares/auth'; // Importing the authentication middleware
import multerConfig from './config/multer'; // Importing the multer configuration for file uploads

import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';


const routes = Router()

const upload = multer(multerConfig) // Initializing multer with the configuration

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

routes.use(authMiddleware) // Applying the authentication middleware to all routes below

routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)
routes.put('/products/:id', upload.single('file'), ProductController.update)


routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)
routes.put('/categories/:id', upload.single('file'), CategoryController.update)


routes.post('/orders', OrderController.store)
routes.get('/orders', OrderController.index)
routes.put('/orders/:id', OrderController.update)


export default routes

// File that defines the routes for the application using Express Router.
// It imports the necessary modules, including the Router from Express and the UserController for handling user-related requests.