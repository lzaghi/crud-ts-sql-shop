import { NextFunction, Request, Response } from 'express';

const validateUsersBody = (req: Request, res: Response, next: NextFunction) => {
  const desiredKeys = ['username', 'vocation', 'level', 'password'];
  const keys = Object.keys(req.body);
  
  let error;

  desiredKeys.forEach((desiredKey) => {
    if (!keys.includes(desiredKey)) {
      error = res.status(400).send({ message: `"${desiredKey}" is required` });
    }
  });
  
  if (error) {
    return error;
  }

  if (req.body.level < 1) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }

  next();
};

export default validateUsersBody;
