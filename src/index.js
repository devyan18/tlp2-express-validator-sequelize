import express from 'express';
import morgan from 'morgan';
import { userRouter } from './routes/user.routes.js';
import { createConnection } from './db.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/users', userRouter);

app.listen(4000, async () => {
  console.log('Server on port 4000');

  await createConnection();
});
