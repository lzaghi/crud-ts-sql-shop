import { Request, Response } from 'express';
import usersService from '../services/users.service';
import joi from '../validations/schemas';

const create = async (req: Request, res: Response) => {
  const user = req.body;
  console.log('controller');
  
  const { error } = joi.userSchema.validate(user);
  if (error) {
    return res.status(422).json({ message: error.message });
  } 

  const token = await usersService.create(user);
  res.status(201).json({ token });
};

const login = async (req: Request, res: Response) => {
  const credentials = req.body;
  const data = await usersService.login(credentials);

  if (data.type) {
    return res.status(data.type as number).json({ message: data.message });
  }

  res.status(200).json({ token: data.message });
};

const usersController = {
  create,
  login,
};

export default usersController;
