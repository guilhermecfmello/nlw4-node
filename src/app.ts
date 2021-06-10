import 'reflect-metadata'
import express from 'express';
import createConnection from './database';
import { router } from './routes';
import path from 'path';


createConnection();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(router);

export { app };