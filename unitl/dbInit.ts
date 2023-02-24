import { Sequelize } from 'sequelize-typescript';
import { models } from '../src/models';

const URI = 'postgres://ihor.k:HiwYe3BCfG4z@ep-summer-feather-170980.eu-central-1.aws.neon.tech/neondb'

export const dbInit = () => {
  try {
    return new Sequelize(
      URI,
      {
        models,
        dialectOptions: {
          ssl: true,
        }
      }
    );
  } catch (e) {
    console.log(`Can't connect to database`, e)
  } finally {
    console.log('DB connected 🚀🚀🚀')
  }
}
