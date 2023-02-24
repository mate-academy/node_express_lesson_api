import { Color } from './models/Color';
import { User } from './models/User';
import { dbInit } from '../unitl/dbInit';

const sync = async () => {
  dbInit();

  await Color.sync({ alter: true });
  await User.sync({ alter: true });
}

sync();
