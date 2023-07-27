import { Button} from '@mui/material'

const CustomButton = ({ children, ...other }) => {
	return (
		<Button {...other} sx={{ backgroundColor: 'rgba(0,0,0, 0.1)', color: 'white' }} variant='contained'>
			{children}
		</Button>
	)
}

export default CustomButton
