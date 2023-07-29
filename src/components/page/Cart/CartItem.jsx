import { Box, ImageListItem, Typography } from '@mui/material'
import { getId, removeFromCart } from '../../../redux/actionSlice/actionSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CustomButton from '../../CustomComponents/CustomButton/CustomButton'
import CustomFlexBox from '../../CustomFlexBox/CustomFlexBox'

const CartItem = ({ game, remove, stateRemove = true, price = true }) => {
	const dispatch = useDispatch()
	const handleSingleGame = id => {
		dispatch(getId(id))
	}

	return (
		<Box>
			<ImageListItem
				sx={{
					marginRight: '5px',
					'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px' },
					padding: '5px',
				}}>
				<Link to={`/game/${game?.name}`}>
					<img
						style={{
							cursor: 'pointer',
							borderRadius: '5px',
							height: '400px',
							width: '300px',
							objectFit: 'cover',
						}}
						src={game?.background_image}
						alt='rrr'
						loading='lazy'
						onClick={() => handleSingleGame(game?.id)}
					/>
				</Link>
				<CustomFlexBox>
					<Box>
						<Typography fontSize='10px'>{game?.name}</Typography>
						{price && <Typography fontSize='10px'>{game?.playtime} $</Typography>}
					</Box>
					{stateRemove && (
						<CustomButton onClick={() => dispatch(remove(game?.id))}>Remove</CustomButton>
					)}
				</CustomFlexBox>
			</ImageListItem>
		</Box>
	)
}

export default CartItem
