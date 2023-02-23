import express from "express";
import cors from "cors";
import { colorController } from './controllers/color.controller';
import { userController } from './controllers/user.controller';
import { colorRouter } from './routers/color.router';
import { userRouter } from './routers/user.router';

const PORT = 5000;

const app = express();

app.use(cors());

app.use('/users', userRouter);

app.use('/colors', colorRouter);

app.listen(PORT, () => {
  console.log(`API is ready on http://localhost:${PORT} 🚀🚀🚀`);
})
