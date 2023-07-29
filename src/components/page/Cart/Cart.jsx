import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import CustomButton from '../../CustomComponents/CustomButton/CustomButton'
import CustomFlexBox from '../../CustomFlexBox/CustomFlexBox'
import { removeFromCart } from '../../../redux/actionSlice/actionSlice'
import { addToCheckout } from '../../../redux/checkoutSlice/checkoutSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
	const { cart } = useSelector(state => state.action)
  const dispatch = useDispatch()
	const totalCount = cart.reduce((acc, game) => (acc += game.playtime), 0)

 
	return (
		<Box>
			<Box padding='20px 0' display='flex' flexWrap='wrap' justifyContent='space-around'>
				{cart?.map(game => (
          
					<CartItem key={game.id} game={game} remove={removeFromCart} />
				))}
			</Box>

				{!cart?.length && <Typography textAlign='center' fontSize='40px'>No game in cart</Typography>}
      <CustomFlexBox>
			<Typography  padding='20px 0' fontSize='20px'>Total price: {totalCount} $</Typography>
      <Link to={`/checkout`}><CustomButton onClick={() => dispatch(addToCheckout(cart))}>Checkout</CustomButton></Link>
      </CustomFlexBox>
		</Box>
	)
}

export default Cart
