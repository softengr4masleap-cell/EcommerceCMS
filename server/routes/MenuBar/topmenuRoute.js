import express from 'express';
import { createTopMenuBar, getTopMenuBar } from '../../controller/MenuBar/topMenuBar.js';

const route = express.Router();
route.post('/topmenu/create', createTopMenuBar);
route.get('/topmenu/getAll', getTopMenuBar);

export default route;
