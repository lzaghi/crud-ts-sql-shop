import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/products';

const getAll = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute<RowDataPacket[] & IProduct[]>(`
    SELECT * FROM Trybesmith.products
  `);
  return products;
};

const productModel = {
  getAll,
};

export default productModel;
