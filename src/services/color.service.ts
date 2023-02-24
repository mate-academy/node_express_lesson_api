import { Color } from '../models/Color';

const getAll = () => {
  return Color.findAll();
};

export const colorService = {
  getAll,
}
