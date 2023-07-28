import { Box, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CustomButton from '../CustomComponents/CustomButton/CustomButton'
import CustomGenre from '../CustomComponents/CustomGenre/CustomGenre'
import { Link } from 'react-router-dom'
import { useGetSingleGameQuery } from '../../redux/rawGame'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,  removeInCart, setSingleGame } from '../../redux/actionSlice/actionSlice'
import { useEffect } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { addToFavorite, removeFromFavorite } from '../../redux/favoriteSlice/favoriteSlice'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CustomGame = () => {
	const { id } = useSelector(state => state.action)
	const { cart:addCart } = useSelector(state => state.action)
	const { favorite:addFavorite } = useSelector(state => state.favorite)
	const { data } = useGetSingleGameQuery(id)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setSingleGame(data))
	}, [data])

  const cart = addCart.some(item => item.id === data.id)
  const favorite = addFavorite.some(item => item.id === data.id)


  const handleClick = (e) => {
    e.stopPropagation()
    if (!cart) {
      dispatch(addToCart(data))
    } else {
      dispatch(removeInCart(data))
    }
  }
  const handleClickFavorite = (e) => {
    e.stopPropagation()
    if (!favorite) {
      dispatch(addToFavorite(data))
    } else {
      dispatch(removeFromFavorite(data))
    }
  }
  console.log(addFavorite);

	return (
		<>
			<Link style={{ width: '100%' }} to={`game/${data?.name}`}>
				<img
					style={{
						width: '100%',
						maxHeight: '700px',
						objectFit: 'cover',
						objectPosition: 'top',
						borderRadius: '20px',
					}}
					src={data?.background_image}
					alt='image'
				/>
			</Link>

			<Typography sx={{ fontSize: ['30px', '45px', '60px'], fontWeight: 'bold' }}>
				{data?.name}
			</Typography>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				width='100%'
				gap='5px'
				flexWrap='wrap'>
				<Box display='flex' flexWrap='wrap'>
					{data?.genres?.map(item => (
						<CustomGenre key={item?.id}>{item?.name}</CustomGenre>
					))}
				</Box>
				<Box display='flex' justifyContent='center' gap='10px' alignItems='center'>
					<Typography variant='h5' component='h5'>
						{data?.playtime}$
					</Typography>

					<CustomButton  onClick={handleClick}>
						{cart ? <RemoveShoppingCartIcon fontSize='small'/> : <AddShoppingCartIcon fontSize='small'/> }
					</CustomButton>

					<CustomButton onClick={handleClickFavorite}>
						{favorite ? <FavoriteIcon fontSize='small' /> : <FavoriteBorderIcon fontSize='small'/>  }
					</CustomButton>
				</Box>
			</Box>
		</>
	)
}


export default CustomGame
