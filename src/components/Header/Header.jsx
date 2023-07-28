import * as React from 'react'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase, Typography } from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import GamepadIcon from '@mui/icons-material/Gamepad'
import { Link } from 'react-router-dom'
import { ROUTE } from '../../Constants/route'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenMenu, setSearchGame } from '../../redux/actionSlice/actionSlice'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CustomFlexBox from '../CustomFlexBox/CustomFlexBox'

export default function Header() {
	const inputContainer = {
		sx: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '5px',
			padding: '5px',
			textAlign: 'center',
			backgroundColor: '#504147',
			borderRadius: '10px',
		},
	}

	const icons = {
		sx: {
			fontSize: 'medium',
			cursor: 'pointer',
			padding: '10px',
			backgroundColor: '#504147',
			borderRadius: '100%',
		},
	}

	const dispatch = useDispatch()

	const containerFlex = {
		sx: {
			borderRadius: '100%',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'start',
			gap: '10px',
		},
	}
	const [value, setValue] = React.useState('')

	const handleSearch = () => {
		dispatch(setSearchGame(value))
		setValue('')
	}

	const { cart } = useSelector(state => state.action)
	const { favorite } = useSelector(state => state.favorite)

	return (
		<Box sx={{ backgroundColor: 'inherit' }} position='static'>
			<Box {...containerFlex}>
				<CustomFlexBox>
					<GamepadIcon onClick={() => dispatch(setOpenMenu(true))} />
					<Typography variant='h6' component='div'>
						<Link to={ROUTE.HOME} style={{ color: 'inherit', textDecoration: 'none' }}>
							Joystore
						</Link>
					</Typography>
				</CustomFlexBox>

				<Box sx={{ flexWrap: 'wrap', gap: '5px', justifyContent: 'end', display: 'flex' }}>
					<Box {...inputContainer}>
						<SearchIcon sx={{ cursor: 'pointer' }} onClick={handleSearch} />
						<InputBase
							value={value}
							onChange={e => setValue(e.target.value)}
							sx={{ color: 'inherit', textAlign: 'center', width: ['120px', '150px', '200px'] }}
							placeholder='Search game...'
						/>
					</Box>
					<Box {...containerFlex}>
						<NotificationsActiveIcon {...icons} />

						<Link style={{ textDecoration: 'none', color: 'white' }} to={ROUTE.CART}>
							<Box sx={{ position: 'relative' }}>
								<LocalMallIcon {...icons} />
								<Typography
									sx={{
										position: 'absolute',
										top: 25,
										right: -5,
										backgroundColor: 'gray',
										padding: '0 7px',
										borderRadius: '100%',
									}}>
									{cart.length}
								</Typography>
							</Box>
						</Link>
						<Link style={{ textDecoration: 'none', color: 'white' }} to={ROUTE.FAVORITE}>
							<Box sx={{ position: 'relative' }}>
								<FavoriteIcon {...icons} />

								<Typography
									sx={{
										position: 'absolute',
										top: 25,
										right: -5,
										backgroundColor: 'gray',
										padding: '0 7px',
										borderRadius: '100%',
									}}>
									{favorite.length}
								</Typography>
							</Box>
						</Link>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
