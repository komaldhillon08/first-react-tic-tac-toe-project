import Player from './components/players.jsx'
// add gameboard file add the gameBoard
import GameBoard from './components/gameBoard.jsx'
// import the useState 
import { useState } from 'react'

function App() {

  const [activePlayer, setActivePlayer] = useState("X")

  function handleSelectSquare() {
    setActivePlayer((curPlayerActive) => curPlayerActive === "X" ? "0" : "X")
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name="Player 1" symbol="❌" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="⭕" isActive={activePlayer === "0"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App
