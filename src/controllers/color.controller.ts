import { colorService } from '../services/color.service';
import { Request, Response } from 'express';

const getAll = (req: Request, res: Response) => {
  const colors = colorService.getAll();

  res.send(colors);
}

export const colorController = {
  getAll,
}
