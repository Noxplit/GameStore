import { useSelector } from 'react-redux'
import CartItem from '../Cart/CartItem'
import CustomFlexBox from '../../CustomFlexBox/CustomFlexBox'
import { removeFromFavoritePage } from '../../../redux/favoriteSlice/favoriteSlice'
import { Box, Typography } from '@mui/material'

const Checkout = () => {
	const { checkout:checkoutMap } = useSelector(state => state.checkout)
  console.log();

 
	return (
		<Box>
      <Typography fontSize='40px' textAlign='center'>Thank you very much for your order!</Typography>
			<Box padding='20px 0' display='flex' flexWrap='wrap' justifyContent='space-around'>
      {checkoutMap.map(checkout => checkout?.map(game =>
          
					<CartItem price={false} stateRemove={false} key={game.id} game={game} remove={removeFromFavoritePage} />
				))}
			</Box>

      <CustomFlexBox>
      </CustomFlexBox>
		</Box>
	)
}

export default Checkout
