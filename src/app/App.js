import { createContext, useState} from 'react';
import { MemoryGame } from '../components/MemoryGame/MemoryGame';
import { useRandomCards } from '../hooks/useRandomCards';
export const GameContext = createContext() 


function App() {
const [controller,setController] = useState({moves:0,time:0,gameOver:false})
const {randomCards} = useRandomCards(12)
const [cards,setCards] = useState(randomCards)





  return (
    <div className="App">
      <GameContext.Provider value={{cards,setCards,setController,controller}}>
      <MemoryGame/>
      </GameContext.Provider>
    </div>
  );
}

export default App;
