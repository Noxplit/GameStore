import * as React from 'react'
import Box from '@mui/material/Box'

import {  Typography } from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import GamepadIcon from '@mui/icons-material/Gamepad'
import { Link } from 'react-router-dom'
import { ROUTE } from '../../Constants/route'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenMenu, setSearchGame } from '../../redux/actionSlice/actionSlice'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CustomFlexBox from '../CustomFlexBox/CustomFlexBox'
import CustomNotification from '../CustomComponents/CustomNotification/CustomNotification'
import TuneIcon from '@mui/icons-material/Tune';
import CustomSearch from '../CustomComponents/CustimSearch/CustomSearch'

export default function Header() {


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
			display:  'flex',
			justifyContent: 'space-between',
			alignItems: 'start',
			gap: '10px',
		},
	}
	const containerIcons = {
		sx: {
			borderRadius: '100%',
			display: ['none', 'none', 'flex'],
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
	const { checkout } = useSelector(state => state.checkout)
  console.log();

	return (
		<Box sx={{ backgroundColor: 'inherit' }} position='static'>
			<Box {...containerFlex}>
				<CustomFlexBox>
					<GamepadIcon onClick={() => dispatch(setOpenMenu(true))} />
					<Typography variant='h6' component='div'>
						<Link  to={ROUTE.HOME} style={{ color: 'inherit', textDecoration: 'none' }}>
							Joystore
						</Link>
					</Typography>
				</CustomFlexBox>

				<Box sx={{ flexWrap: 'wrap', gap: '5px', justifyContent: 'end', display: 'flex' }}>
		<CustomSearch value={value} setValue={e => setValue(e.target.value)} handleSearch={handleSearch}/>
					<Box {...containerIcons}>
						<CustomNotification state={checkout} link={ROUTE.CHECKOUT}>
							<NotificationsActiveIcon {...icons} />
						</CustomNotification>

						<CustomNotification state={cart} link={ROUTE.CART}>
							<LocalMallIcon {...icons} />
						</CustomNotification>

						<CustomNotification state={favorite} link={ROUTE.FAVORITE}>
							<FavoriteIcon {...icons} />
						</CustomNotification>
						<CustomNotification state={favorite} link={ROUTE.FILTER}>
							<TuneIcon {...icons} />
						</CustomNotification>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
