import Player from './components/players.jsx'
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player name="Player 1" symbol="❌" />
        <Player name="Player 2" symbol="⭕" />
        </ol>
      </div>
    </main>
  )
}

export default App
