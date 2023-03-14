import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/user';
import connection from './connection';

const create = async (user: IUser): Promise<IUser> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)
  `, [username, vocation, level, password]);
  const payload = { id: insertId, username, vocation, level };
  return payload;
};

const usersModel = {
  create,
};

export default usersModel;