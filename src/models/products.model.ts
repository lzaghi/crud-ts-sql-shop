import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/products';

const getAll = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute<RowDataPacket[] & IProduct[]>(`
    SELECT id, name, amount, order_id as orderId FROM Trybesmith.products
  `);
  return products;
};

const create = async (product: IProduct): Promise<IProduct> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount)
    VALUES (?, ?)
  `, [product.name, product.amount]);
  const newProduct = { id: insertId, ...product };
  return newProduct;
};

const update = async (productId: number, orderId: number) => {
  await connection.execute(`
    UPDATE Trybesmith.products
    SET order_id = ?
    WHERE id = ?
  `, [orderId, productId]);
};

const productModel = {
  getAll,
  create,
  update,
};

export default productModel;
