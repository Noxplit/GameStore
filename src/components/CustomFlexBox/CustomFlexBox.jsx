import { Box } from '@mui/material'

const CustomFlexBox = ({ children , ...other }) => {
	return (
		<Box {...other}
    
			sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', gap: '5px' }}>
			{children}
		</Box>
	)
}

export default CustomFlexBox
