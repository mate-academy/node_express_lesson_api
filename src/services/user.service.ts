import { User } from '../types';

const users = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

const getAll = () => users;

const create = (options: Omit<User, 'id'>) => {
  const maxId = users.length
    ? Math.max(...users.map(({ id }) => id))
    : 0;

  const newUser = {
    id: maxId + 1,
    ...options,
  }

  users.push(newUser);

  return newUser;
}

const findById = (userId: number) => {
  return users.find(u => u.id === userId) || null;
}

export const userService = {
  getAll,
  create,
  findById,
}
