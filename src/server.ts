import express from "express";
import cors from "cors";
import { colorRouter } from './routers/color.router';
import { userRouter } from './routers/user.router';
import { dbInit } from '../unitl/dbInit';

const PORT = 5000;

const app = express();

dbInit();

app.use(cors());

app.use('/users', userRouter);

app.use('/colors', colorRouter);

app.listen(PORT, () => {
  console.log(`API is ready on http://localhost:${PORT} 🚀🚀🚀`);
})
