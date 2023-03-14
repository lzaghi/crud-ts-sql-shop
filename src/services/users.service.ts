import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/user';
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

const usersService = {
  create,
};

export default usersService;