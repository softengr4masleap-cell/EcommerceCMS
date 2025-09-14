import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import heroRoute from './routes/Hero/heroRoute.js';
import route from './routes/MenuBar/topmenuRoute.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
  console.log('Database connected successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.log('Database connection failed', error);
});

app.use('/api', route);

app.use('/api', heroRoute);