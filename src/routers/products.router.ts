import { Router } from 'express';
import productController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.get('/', productController.getAll);
productsRouter.post('/', productController.create);

export default productsRouter;