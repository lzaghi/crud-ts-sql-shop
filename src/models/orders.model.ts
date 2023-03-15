import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IOrder } from '../interfaces/orders';

const getAll = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & IOrder[]>(`
    SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as o
    LEFT JOIN Trybesmith.products as p
    ON o.id = p.order_id
    GROUP BY o.id
  `);
  return orders;
};

const create = async (userId: number) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.orders (user_id)
    VALUES (?)
  `, [userId]);
  return insertId;
};

const ordersModel = {
  getAll,
  create,
};

export default ordersModel;