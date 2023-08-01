import { Box, Typography } from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite'
import TuneIcon from '@mui/icons-material/Tune'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import { setOpenMenu } from '../../redux/actionSlice/actionSlice'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { Link } from 'react-router-dom'
import { ROUTE } from '../../Constants/route'
import GamepadIcon from '@mui/icons-material/Gamepad'

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
			<Link style={{ color: 'inherit' }} to={ROUTE.HOME}>
				<Box {...boxContainer}>
					<GamepadIcon />
					<Typography {...typography}>Cart</Typography>
				</Box>
			</Link>
			<Link style={{ color: 'inherit' }} to={ROUTE.CHECKOUT}>
				<Box {...boxContainer}>
					<NotificationsActiveIcon />
					<Typography {...typography}>Checkout</Typography>
				</Box>
			</Link>

			<Link style={{ color: 'inherit' }} to={ROUTE.CART}>
				<Box {...boxContainer}>
					<LocalMallIcon />
					<Typography {...typography}>Cart</Typography>
				</Box>
			</Link>

			<Link style={{ color: 'inherit' }} to={ROUTE.FAVORITE}>
				<Box {...boxContainer}>
					<FavoriteIcon />
					<Typography {...typography}>Favorite</Typography>
				</Box>
			</Link>

			<Link style={{ color: 'inherit' }} to={ROUTE.FILTER}>
				<Box {...boxContainer}>
					<TuneIcon />
					<Typography {...typography}>Filter</Typography>
				</Box>
			</Link>
			<Box onClick={() => dispatch(setOpenMenu(false))} {...boxContainer}>
				<CloseIcon fontSize='large' />
				<Typography {...typography}>Close</Typography>
			</Box>
		</Box>
	)
}

export default NavigationList
