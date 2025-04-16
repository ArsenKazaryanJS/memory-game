import { Head } from '../Head/Head'
import { MemoryBoard } from '../MemoryBoard/MemoryBoard'
import { MemoryController } from '../MemoryController/MemoryController'
import './memory_game.css'

export const MemoryGame = () => {
    return (
        <div className='memory_game_box'>
            <Head/>
            <MemoryController/>
            <MemoryBoard/>
        </div>
    )
}
