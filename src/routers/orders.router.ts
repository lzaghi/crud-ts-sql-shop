import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateToken from '../middlewares/auth.middleware';
import validateProducts from '../middlewares/products.middleware';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getAll);
ordersRouter.post(
  '/',
  validateToken,
  validateProducts.validateProductsIds,
  ordersController.createOrder,
);

export default ordersRouter;