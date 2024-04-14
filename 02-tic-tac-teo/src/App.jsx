import { useState} from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { SaveGameToStorage, resetGameStorage } from "./logic/storage/index.js"
import { Winner } from "./components/Winner.jsx"
import  {checkWinnerFrom, checkEndGame} from "./logic/board.js"





function App() {
  const [board, setBoard] = useState( () => {
    const boardFromSorage = window.localStorage.getItem('board')
    return boardFromSorage? JSON.parse(boardFromSorage) : Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X //<-- you can do it in this way since it is a string. Whats the difference between 
    //?? or ||, the first ine, check if the const is null or undefined, the second checks if it is falsey 
  })
  const [winner, setWinner] = useState(null)//bull will be that there are no winner, false that there is a tie 
  //The hooks should never be inside of a conditional, because react saves them in a array, and all of the sudden one could
  //"disappear", the proper qay is the one used above.

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

 

  const updateBoard = (index) => {

    if(board[index] || winner) return
    //If that position is alreafy filled, return nothing, basicallt, dont do anything

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //Por que no modificar directamente el array? por que eso cambiaria el estado sin llamar a la funcion, los props
    // tienen que ser inmutables

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X //Its litterally an if made short 
    setTurn(newTurn)

    //Save the ongoing game
    SaveGameToStorage({
      turn: newTurn,
      board: newBoard
    })

    //Check if there is a winner
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)) {
      setWinner(false)
    }

  }

  // useEffect (() => {
  //   console.log('useEffect')
  // },[winner]) //if you put an empy array, it will only execute once, but with the winner value, it will execute in the beggingin,
  //and each time there is a winner, osea, when the variable changes

  
  return (
   <main className='board'>
    <h1>Tic Tac Toe</h1>
    <button onClick={resetGame}>Reset Game</button>
    <section className="game">
      {
        board.map((_, index) => {
          return(
            <Square
            key={index} 
            index={index}
            updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })
      }
    </section>
      
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>

    </section>
    
    <Winner resetGame={resetGame} winner={winner}/>
    
   </main>
  )
}
// inside of updateBoard, the reson we are passing the function and not executing it is because if we where to execute
//it there, it would execute itself 9 times

//inside of board.map((_, index) => {}), the _ is the element of the array, and the index its its index
//You could easily do board.map((square, index))... and then replace the {board[index]} and simply do a 
//{square}

export default App
