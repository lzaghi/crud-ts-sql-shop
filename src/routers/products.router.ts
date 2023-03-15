import { Router } from 'express';
import productController from '../controllers/products.controller';
import validateProducts from '../middlewares/products.middleware';

const productsRouter = Router();

productsRouter.get('/', productController.getAll);
productsRouter.post('/', validateProducts.validateProductsBody, productController.create);

export default productsRouter;