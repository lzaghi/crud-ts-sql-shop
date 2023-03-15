import { Router } from 'express';
import productController from '../controllers/products.controller';
import validateProductsBody from '../middlewares/products.middleware';

const productsRouter = Router();

productsRouter.get('/', productController.getAll);
productsRouter.post('/', validateProductsBody, productController.create);

export default productsRouter;