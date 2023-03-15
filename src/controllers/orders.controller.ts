import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import joi from '../validations/schemas';

const getAll = async (_req: Request, res: Response) => {
  const orders = await ordersService.getAll();
  res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  const userId = req.body.payload.id;
  const { productsIds } = req.body;

  const { error } = joi.productsIdsSchema.validate(productsIds);
  if (error) {
    return res.status(422).json({ message: error.message });
  }

  const order = await ordersService.createOrder(userId, productsIds);
  res.status(201).json(order);
};

const ordersController = {
  getAll,
  createOrder,
};

export default ordersController;