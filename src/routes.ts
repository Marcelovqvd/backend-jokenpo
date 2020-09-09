import express from 'express';
import knex from './database/connection';

import GamesController from './controllers/GamesController';

const routes = express.Router();
const gamesController = new GamesController();

routes.post('/jokenpo', gamesController.create);

export default routes;