import { User } from '../models/User';

const users = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

const getAll = () => User.findAll();

const create = (options: Pick<User, 'name' | 'carColorId'>) => {
  return  User.create(options);
}

const findById = async (userId: number) => {
  const user = await User.findByPk(userId);

  return user || null;
}

export const userService = {
  getAll,
  create,
  findById,
}
