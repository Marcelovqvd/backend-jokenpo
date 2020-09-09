import { Request, Response } from 'express';
import knex from '../database/connection';

class GamesController {
  async create(request: Request, response: Response) {
    const {
      playerOne,
      playerTwo,
      playerOnePlay,
      playerTwoPlay,
    } = request.body;
  
    const game = {
      playerOne,
      playerTwo,
      playerOnePlay,
      playerTwoPlay,
    }
    
    await knex('games').insert(game);

    if (
      game.playerOnePlay === 'rock'   && game.playerTwoPlay === 'rock' ||
      game.playerOnePlay === 'paper'   && game.playerTwoPlay === 'paper' ||
      game.playerOnePlay === 'scissor' && game.playerTwoPlay === 'scissor' 
    ){
      return response.json({
        message: 
        `${game.playerOne} played ${game.playerOnePlay} - ${game.playerTwo} played ${game.playerTwoPlay}: the game ended in a draw!`
      });
    }
    else if (
        game.playerOnePlay === 'scissor' && game.playerTwoPlay === 'paper'   ||
        game.playerOnePlay === 'rock'   && game.playerTwoPlay === 'scissor' ||
        game.playerOnePlay === 'paper'   && game.playerTwoPlay === 'rock'
      ){
        return response.json({
          message: 
          `${game.playerOne} played ${game.playerOnePlay} - ${game.playerTwo} played ${game.playerTwoPlay}: ${game.playerOne} is the winner!`
        });
    } else {
      return response.json({
        message: 
          `${game.playerOne} played ${game.playerOnePlay} - ${game.playerTwo} played ${game.playerTwoPlay}: ${game.playerTwo} is the winner!`
      });
    }
  }
}

export default GamesController;