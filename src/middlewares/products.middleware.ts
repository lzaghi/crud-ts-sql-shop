import { NextFunction, Request, Response } from 'express';

const validateProductsBody = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  if (!name) {
    return res.status(400).send({ message: '"name" is required' });
  }
  if (!amount) {
    return res.status(400).send({ message: '"amount" is required' });
  }
  next();
};

const validateProductsIds = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(400).send({ message: '"productsIds" is required' });
  }
  next();
};

const validateProducts = {
  validateProductsBody,
  validateProductsIds,
};

export default validateProducts;
