import { WINNER_COMBOS } from "../constants.js"


export const checkWinnerFrom = (boardToCkeck) => {
    //We check all the winning combinations
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(
        boardToCkeck[a] && //Does a value exist in the index a of the board, 0 for example has an 'X'
        boardToCkeck[a] === boardToCkeck[b] && // if it does, is it the same simbol as in the position b, also X for example
        boardToCkeck[a] === boardToCkeck[c] // if the last is true as well, is it the same simbol as in the index c
      ) {
        return boardToCkeck[a]
      }
    }
    return null //if there is no winner
  }

  export const checkEndGame = (newBoard) => {
    //if there are no more empy spaces, there is a tie
    return newBoard.every((square) => square !== null)
  }
