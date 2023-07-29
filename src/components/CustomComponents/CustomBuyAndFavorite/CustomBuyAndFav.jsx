import CustomFlexBox from '../../CustomFlexBox/CustomFlexBox'
import CustomButton from '../CustomButton/CustomButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeInCart } from '../../../redux/actionSlice/actionSlice';
import { addToFavorite, removeFromFavorite} from '../../../redux/favoriteSlice/favoriteSlice';

const CustomBuyAndFav = ({data}) => {

  const dispatch = useDispatch()
	const { cart:addCart } = useSelector(state => state.action)
	const { favorite:addFavorite } = useSelector(state => state.favorite)
  const cart = addCart.some(item => item.id === data.id)
  const favorite = addFavorite.some(item => item.id === data.id)

  const handleClick = (e) => {
    e.stopPropagation()
    if (!cart) {
      dispatch(addToCart(data))
    } else {
      dispatch(removeInCart(data.id))
    }
  }

  const handleClickFavorite = (e) => {
    e.stopPropagation()
    if (!favorite) {
      dispatch(addToFavorite(data))
    } else {
      dispatch(removeFromFavorite(data.id))
    }
  }
  console.log(data);
  console.log(addFavorite);
  return (
      <CustomFlexBox>
					<CustomButton  onClick={handleClick}>
						{cart ? <RemoveShoppingCartIcon fontSize='small'/> : <AddShoppingCartIcon fontSize='small'/> }
					</CustomButton>

					<CustomButton onClick={handleClickFavorite}>
						{favorite ? <FavoriteIcon fontSize='small' /> : <FavoriteBorderIcon fontSize='small'/>  }
					</CustomButton>
          </CustomFlexBox>
  )
}

export default CustomBuyAndFav