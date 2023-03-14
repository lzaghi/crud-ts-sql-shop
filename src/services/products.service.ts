import { IProduct } from '../interfaces/products';
import productModel from '../models/products.model';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const create = async (product: IProduct): Promise<IProduct> => {
  const newProduct = await productModel.create(product);
  return newProduct;
};

const productService = {
  getAll,
  create,
};

export default productService;