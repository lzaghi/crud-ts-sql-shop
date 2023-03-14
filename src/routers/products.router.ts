import { Router } from 'express';
import productController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.get('/', productController.getAll);

export default productsRouter;