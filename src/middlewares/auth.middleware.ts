import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import usersService from '../services/users.service';

// https://dev.to/juliecherner/authentication-with-jwt-tokens-in-typescript-with-express-3gb1
const secret = process.env.JWT_SECRET || 'segredo';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(authorization, secret);
    
    req.body.payload = payload;

    const userId = req.body.payload.id;
    const user = await usersService.getById(userId);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;