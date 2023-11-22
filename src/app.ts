import express from 'express';
import cors from 'cors';
import userRouter from './app/modules/user/user.route';

const app = express();

app.use(cors());
//parser
app.use(express.json());

//user router
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
