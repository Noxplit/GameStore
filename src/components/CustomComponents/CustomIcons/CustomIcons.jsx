import { Box } from '@mui/material'

const CustomIcons = ({ children }) => {
	return (
		<Box
			sx={{
				cursor: 'pointer',
				'&:hover': { opacity: '0.7' },
				transition: '0.2s',
        backgroundColor: '#504147',
        padding: '8px 10px',
				borderRadius: '100%'
			}}
			>{children}</Box>
	)
}

export default CustomIcons
