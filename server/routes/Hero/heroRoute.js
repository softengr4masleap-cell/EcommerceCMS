import express from 'express';
import { createHero, deleteHero, getAllHeroes, getHeroById, updateHero } from '../../controller/Hero/heroController.js';

const route = express.Router();

route.post('/hero/create', createHero);
route.get('/hero/getAll', getAllHeroes);
route.put('/hero/update/:id', updateHero);
route.delete('/hero/delete/:id', deleteHero);
route.get('/hero/get/:id', getHeroById);

export default route;