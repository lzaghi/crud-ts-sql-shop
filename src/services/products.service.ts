import { IProduct } from '../interfaces/products';
import productModel from '../models/products.model';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const productService = {
  getAll,
};

export default productService;