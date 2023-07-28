import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import CartItem from '../Cart/CartItem'
import CustomFlexBox from '../../CustomFlexBox/CustomFlexBox'
import { removeFromFavoritePage } from '../../../redux/favoriteSlice/favoriteSlice'

const Favorite = () => {
	const { favorite } = useSelector(state => state.favorite)
console.log(favorite);
 
	return (
		<Box>
			<Box padding='20px 0' display='flex' flexWrap='wrap' justifyContent='space-around'>
				{favorite?.map(game => (
          
					<CartItem key={game.id} game={game} remove={removeFromFavoritePage} />
				))}
			</Box>

				{!favorite?.length && <Typography textAlign='center' fontSize='40px'>No game in favorite</Typography>}
      <CustomFlexBox>
      </CustomFlexBox>
		</Box>
	)
}

export default Favorite
