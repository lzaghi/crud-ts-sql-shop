import jwt, { SignOptions } from 'jsonwebtoken';
import { ICredentials, IUser } from '../interfaces/user';
import usersModel from '../models/users.model';

const JWT_SECRET = process.env.JWT_SECRET || 'segredo';
const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const create = async (user: IUser) => {
  const payload = await usersModel.create(user);

  const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

  return token;
};

const login = async (credentials: ICredentials) => {
  const user = await usersModel.getByUsername(credentials);
  
  if (!user || user.password !== credentials.password) {
    return { type: 401, message: 'Username or password invalid' };
  }

  const payload = { id: user.id, username: user.username };
  const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

  return { type: '', message: token };
};

const usersService = {
  create,
  login,
};

export default usersService;