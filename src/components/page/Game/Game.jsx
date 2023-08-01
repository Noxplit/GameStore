import { Box } from '@mui/material'
import CustomSingleGame from '../../CustomSingleGame/CustomSingleGame'

const Game = () => {

	return (
	<Box marginTop='10px' sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    <CustomSingleGame/>
  </Box>
	)
}

export default Game
