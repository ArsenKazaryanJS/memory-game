import { useContext, useEffect } from 'react'
import './memory_controller.css'
import { GameContext } from '../../app/App'
import { useGame } from '../../hooks/useGame'
import { useRandomCards } from '../../hooks/useRandomCards'

export const MemoryController = () => {
const {setController,controller,setCards,cards} = useContext(GameContext)
const {randomCards} = useRandomCards(12)
const {handleNewGame} = useGame(cards,setCards,setController,controller)

  useEffect(() => {
    
    if(controller.gameOver) return
      const interval = setInterval(() => {
        setController((prev)=> ({...prev, time:prev.time + 1}));
      }, 1000);

      return () => clearInterval(interval);
  }, [])




    return (
        <div className='memory_controller_box'>
            <button onClick={()=>handleNewGame(randomCards)}>New Game</button>
            <div className="moves"><p>Moves</p> <p>{controller.moves}</p></div>
            <div className="time"><p>Time</p> <p>{controller.time}</p></div>
        </div>
    )
}
