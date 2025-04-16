import { useState } from "react";

export const useGame = (cards,setCards,setController,controller) => {
  const [flippedCards,setFlippedCards] = useState([])

  
    const handleFlipped = (card) => {
        if (card.flipped || flippedCards.length === 2) return;
        
        const updatedCards = cards.map((el) => el.id === card.id ? { ...el, flipped: true } : el);
        const newFlippedCards = [...flippedCards, card];
      
        setCards(updatedCards);
        setFlippedCards(newFlippedCards);
      
        if (newFlippedCards.length === 2) {
          setController((prev)=> ({...prev,moves:prev.moves + 1}))

          const [first, second] = newFlippedCards;
          if (first.value === second.value) {
          const updatedCards = cards.map((el) => el.value === card.value ? { ...el, isWin: true,flipped: true } : el);

          
          setTimeout(()=>{
            setCards(updatedCards)
            setFlippedCards([]);
          },900)

          setTimeout(()=>{
            const allMatched = updatedCards.every(item => item.isWin);
            if (allMatched) {
              setController(prevState => ({ ...prevState, gameOver: true }));
              alert(`Congratulations! You completed the game in ${controller.moves} moves and ${controller.time}! seconds`);
            }
          },1300)

        

          } else {
            setTimeout(() => {
              const resetCards = updatedCards.map((el) => el.id === first.id || el.id === second.id ? { ...el, flipped: false } : el);
              setCards(resetCards);
              setFlippedCards([]);
            }, 1000);
          }
        }
      }
      

      const handleNewGame = (randomCards) => {
        setCards(randomCards);
        setFlippedCards([]);
        setController((prev) => ({ ...prev, time: 0, moves: 0 }));
      };

      return {handleFlipped,handleNewGame}
}
