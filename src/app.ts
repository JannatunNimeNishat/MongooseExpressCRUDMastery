import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
//parser
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
