import { Request, Response } from 'express';
import productService from '../services/products.service';

const getAll = async (_req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

const productController = {
  getAll,
};

export default productController;