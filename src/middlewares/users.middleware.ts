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

  next();
};

export default validateUsersBody;
