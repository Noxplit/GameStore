import { Typography } from '@mui/material'

const CustomGenre = ({ children }) => {
	return (
		<Typography
			sx={{
				color: 'white',
				backgroundColor: 'rgba(0,0,0, 0.1)',
				padding: '8px',
				borderRadius: '20px',
			}}>
			{children}
		</Typography>
	)
}

export default CustomGenre
