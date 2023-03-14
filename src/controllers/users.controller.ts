import { Request, Response } from 'express';
import usersService from '../services/users.service';

const create = async (req: Request, res: Response) => {
  const user = req.body;
  const token = await usersService.create(user);
  res.status(201).json({ token });
};

const usersController = {
  create,
};

export default usersController;
