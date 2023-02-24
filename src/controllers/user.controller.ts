import { userService } from '../services/user.service';
import { Request, Response } from 'express';

const getAll = async (req: Request, res: Response) => {
  const users = await userService.getAll();

  res.send(users);
}

const create = async (req: Request, res: Response) => {
  const { name, carColorId } = req.body;

  const isDataValid = !(
    !name
    || !carColorId
  )

  const isDataTypeValid = !(
    typeof name !== 'string'
    || typeof carColorId !== 'number'
  );

  if (!isDataTypeValid) {
    res.sendStatus(422);

    return;
  }

  if (!isDataValid) {
    res.sendStatus(400);

    return;
  }

  const createdUser = await userService.create({ name, carColorId });

  res.statusCode = 201;
  res.send(createdUser);
}

const getById = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const isUserIdValid = !Number.isNaN(userId);

  if (!isUserIdValid) {
    res.sendStatus(422);

    return;
  }

  const user = await userService.findById(userId);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(user);
}

export const userController = {
  getAll,
  create,
  getById,
}
