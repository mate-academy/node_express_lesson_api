import { colorService } from '../services/color.service';
import { Request, Response } from 'express';

const getAll = async (req: Request, res: Response) => {
  const colors = await colorService.getAll();

  res.send(colors);
}

export const colorController = {
  getAll,
}
