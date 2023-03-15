import { IOrder } from '../interfaces/orders';
import ordersModel from '../models/orders.model';
import productModel from '../models/products.model';

const getAll = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getAll();
  return orders;
};

const createOrder = async (userId: number, productsIds: number[]) => {
  const orderId = await ordersModel.create(userId);

  await Promise.all(productsIds
    .map(async (productId) => productModel.update(productId, orderId)));
  
  const newOrder = { userId, productsIds };
  return newOrder;
};

const ordersService = {
  getAll,
  createOrder,
};

export default ordersService;