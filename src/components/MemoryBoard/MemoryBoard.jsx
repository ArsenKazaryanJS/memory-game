import "./memory_board.css";
import { useContext } from "react";
import { GameContext } from "../../app/App.js";
import { useGame } from "../../hooks/useGame.jsx";

export const MemoryBoard = () => {
const {cards,setCards,setController,controller} = useContext(GameContext)
const {handleFlipped} = useGame(cards,setCards,setController,controller)


  return (
<div className="memory_board_box">
{
  cards.map((el)=> 
   <div key={el.id} className="card">
  <div className={`card-inner ${el.flipped && 'flliped'}`} onClick={()=> handleFlipped(el)}> 
    <div className="card-front"><h2>?</h2></div>
    <div className={`card-back ${(el.isWin) && 'win'}`}>{<el.icon/>}</div>
  </div>
</div>)
}
</div>

  );
};
