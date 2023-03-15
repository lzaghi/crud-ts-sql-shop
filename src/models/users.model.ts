import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ICredentials, IUser } from '../interfaces/user';
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

const getByUsername = async (credentials: ICredentials) => {
  const { username, password } = credentials;
  const [[user]] = await connection.execute<RowDataPacket[] & IUser>(`
    SELECT * FROM Trybesmith.users
    WHERE username = ? AND password = ?
  `, [username, password]);
  return user;
};

const usersModel = {
  create,
  getByUsername,
};

export default usersModel;