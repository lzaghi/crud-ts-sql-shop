import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validateLoginBody from '../middlewares/login.middleware';

const loginRouter = Router();

loginRouter.post('/', validateLoginBody, usersController.login);

export default loginRouter;