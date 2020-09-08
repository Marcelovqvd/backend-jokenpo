import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.post('/jokenpo', async (request, response) => {
  const {
    playerOne,
    playerTwo,
    playerOnePlay,
    playerTwoPlay,
  } = request.body;

  await knex('games').insert({
    playerOne,
    playerTwo,
    playerOnePlay,
    playerTwoPlay,
  })

  return response.json({message: 'hello'})
})

export default routes;