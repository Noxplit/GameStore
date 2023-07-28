import { GAME_LIST } from '../../Constants/constants'
import GameList from './GameList'
import GameOfDay from './GameOfDay'


const Sidebar = () => {


	return (
    <>
	<GameOfDay/>
  <GameList title='Game List' number={1}/>
{GAME_LIST.map(game => <GameList key={game.title} title={game.title} number={game.number} quantity={game.quantity} />)}
  </>
	)
}

export default Sidebar
