import { Box } from '@mui/material'
import CustomGame from '../CustomGame/CustomGame'
import CustomTypography from '../CustomComponents/customTypography/CustomTypography'


const GameOfDay = () => {

	return (
		<Box
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='start'
			gap='10px'>
			<CustomTypography>Game of day</CustomTypography>
			<Box
				sx={{
					width: '100%',
					padding: '5px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'start',
					flexDirection: 'column',
					gap: '20px',
					backgroundColor: 'rgba(0,0,0, 0.3)',
					borderRadius: '20px',
					position: 'relative',
				}}>
				<CustomGame />
			</Box>
		</Box>
	)
}

export default GameOfDay
