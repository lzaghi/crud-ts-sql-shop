import { Request, Response } from 'express';
import productService from '../services/products.service';

const getAll = async (_req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

const create = async (req: Request, res: Response) => {
  const product = req.body;
  const newProduct = await productService.create(product);
  res.status(201).json(newProduct);
};

const productController = {
  getAll,
  create,
};

export default productController;