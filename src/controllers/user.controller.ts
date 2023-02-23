import { userService } from '../services/user.service';
import { Request, Response } from 'express';
import { colorService } from '../services/color.service';

const getAll = (req: Request, res: Response) => {
  const users = userService.getAll();

  res.send(users);
}

const create = (req: Request, res: Response) => {
  const { name, carColorId } = req.body;

  const colors = colorService.getAll();

  const isColorIdExist = colors.some(c => c.id === carColorId);

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

  if (!isDataValid || !isColorIdExist) {
    res.sendStatus(400);

    return;
  }

  const createdUser = userService.create({ name, carColorId });

  res.statusCode = 201;
  res.send(createdUser);
}

const getById = (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const isUserIdValid = !Number.isNaN(userId);

  if (!isUserIdValid) {
    res.sendStatus(422);

    return;
  }

  const user = userService.findById(userId);

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
