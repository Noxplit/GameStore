import { Box, Typography } from '@mui/material'
import VideogameAssetOffIcon from '@mui/icons-material/VideogameAssetOff'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import ShopIcon from '@mui/icons-material/Shop'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import { setOpenMenu } from '../../redux/actionSlice/actionSlice'

const NavigationList = () => {
	const conteinerFlex = {
		sx: {
			display: 'flex',
			alignItems: 'start',
			flexDirection: 'column',
			gap: '50px',
		},
	}

	const typography = {
		sx: {
			display: ['none', 'flex', 'flex'],
			justifyContent: 'center',
			alignItems: 'center',
			gap: '5px',
		},
	}

	const boxContainer = {
		sx: {
			display: 'flex',
			gap: '5px',
			cursor: 'pointer',
			'&:hover': { color: '#ff6b27', borderBottom: '4px solid #ff6b27' },
			transition: '0.3s',
		},
	}

	const dispatch = useDispatch()
	return (
		<Box {...conteinerFlex}>
			<Box {...boxContainer}>
				<VideogameAssetOffIcon fontSize='large' />
				<Typography {...typography}>Game Store</Typography>
			</Box>

			<Box {...boxContainer}>
				<FavoriteIcon fontSize='large' />
				<Typography {...typography}>Favorite</Typography>
			</Box>

			<Box {...boxContainer}>
				<FormatListBulletedIcon fontSize='large' />
				<Typography {...typography}>List of genres</Typography>
			</Box>

			<Box {...boxContainer}>
				<ShopIcon fontSize='large' />
				<Typography {...typography}>Cart</Typography>
			</Box>
			<Box onClick={() => dispatch(setOpenMenu(false))} {...boxContainer}>
				<CloseIcon fontSize='large' />
				<Typography {...typography}>Close</Typography>
			</Box>
		</Box>
	)
}

export default NavigationList
