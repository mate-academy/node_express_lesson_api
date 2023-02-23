import { Router } from 'express';
import { colorController } from '../controllers/color.controller';

export const colorRouter = Router();

colorRouter.get('/', colorController.getAll);
