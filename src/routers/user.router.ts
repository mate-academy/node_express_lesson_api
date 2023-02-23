import express, { Router } from 'express';
import { userController } from '../controllers/user.controller';

export const userRouter = Router();

userRouter.get('/', userController.getAll)

userRouter.post('/', express.json(), userController.create)

userRouter.get('/:userId', userController.getById);
