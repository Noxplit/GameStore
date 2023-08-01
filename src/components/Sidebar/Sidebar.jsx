import { Box } from '@mui/material'
import { GAME_LIST } from '../../Constants/constants'
import GameList from './GameList'
import GameOfDay from './GameOfDay'


const Sidebar = () => {


	return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'5px' }}>
	<GameOfDay/>
  <GameList title='Game List' number={1}/>
{GAME_LIST.map(game => <GameList key={game.title} title={game.title} number={game.number} quantity={game.quantity} />)}
  </Box>
	)
}

export default Sidebar
