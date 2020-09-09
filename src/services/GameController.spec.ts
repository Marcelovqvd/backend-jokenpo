import GamesController from '../controllers/GamesController';
import request from 'supertest';

import app from '../app';

describe('GamesController', () => {
  it('should be able to create a new Jokenpo Game', async () => {

    const response = await request(app)
    .post('/jokenpo').send({
      playerOne: "playerOne",
      playerTwo: "playerTwo",
      playerOnePlay: "paper",
      playerTwoPlay: "scissor"
    })
        
    expect(response.body)
    .toStrictEqual({
      "message": "playerOne played paper - playerTwo played scissor: playerTwo is the winner!"
    } );
  });
})