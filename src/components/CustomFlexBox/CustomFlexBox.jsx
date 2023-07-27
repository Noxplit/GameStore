import { Box } from '@mui/material'

const CustomFlexBox = ({ children , ...other }) => {
	return (
		<Box {...other}
			sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '5px' }}>
			{children}
		</Box>
	)
}

export default CustomFlexBox
