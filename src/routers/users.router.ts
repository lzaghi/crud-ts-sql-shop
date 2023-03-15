import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validateUsersBody from '../middlewares/users.middleware';

const usersRouter = Router();

usersRouter.post('/', validateUsersBody, usersController.create);

export default usersRouter;