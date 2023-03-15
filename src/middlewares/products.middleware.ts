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

export default validateProductsBody;
