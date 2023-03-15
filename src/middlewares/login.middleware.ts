import { NextFunction, Request, Response } from 'express';

const validateLoginBody = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).send({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).send({ message: '"password" is required' });
  }
  next();
};

export default validateLoginBody;
