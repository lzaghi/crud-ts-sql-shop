import { IOrder } from '../interfaces/orders';
import ordersModel from '../models/orders.model';

const getAll = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getAll();
  return orders;
};

const ordersService = {
  getAll,
};

export default ordersService;