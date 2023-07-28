import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CustomButton from '../CustomComponents/CustomButton/CustomButton'
import CustomIcons from '../CustomComponents/CustomIcons/CustomIcons'
import CustomGenre from '../CustomComponents/CustomGenre/CustomGenre'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import { useDispatch, useSelector } from 'react-redux'
import { useGetMovieQuery, useGetScreenshotsQuery } from '../../redux/rawGame'
import { addToCart, removeInCart } from '../../redux/actionSlice/actionSlice'
import { addToFavorite, removeFromFavorite } from '../../redux/favoriteSlice/favoriteSlice'

const CustomSingleGame = () => {
	const { id } = useSelector(state => state.action)
	const { singleGame: data } = useSelector(state => state.action)
  const { cart:addCart } = useSelector(state => state.action)
	const { favorite:addFavorite } = useSelector(state => state.favorite)
	const { data: screenshots } = useGetScreenshotsQuery(id)
	const { data: movie } = useGetMovieQuery(id)
	const srcMovie = movie?.results[0]?.data?.max

  const cart = addCart.some(item => item.id === data.id)
  const favorite = addFavorite.some(item => item.id === data.id)

const dispatch = useDispatch()

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


	return (
		<>
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

			<Typography sx={{ fontSize: ['30px', '45px', '60px'], fontWeight: 'bold' }}>
				{data?.name}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'start',
					alignItems: 'start',
					flexDirection: 'column',
				}}>
				<Box display='flex' flexWrap='wrap' gap='5px'>
					{data?.genres?.map(item => (
						<CustomGenre key={item?.id}>{item.name}</CustomGenre>
					))}
					<CustomGenre>{data?.released}</CustomGenre>
					<CustomGenre>{data?.developers[0]?.name}</CustomGenre>

					<CustomIcons>
						<LaptopMacIcon />
					</CustomIcons>
					<CustomIcons>
						<SportsEsportsIcon />
					</CustomIcons>
				</Box>
				<Typography>{data?.description_raw}</Typography>
				<Box display='flex' justifyContent='center' gap='10px' alignItems='center'>
					<Typography variant='h5' component='h5'>
						{data?.playtime}$
					</Typography>

					<CustomButton onClick={handleClick}>Add to Cart</CustomButton>

					<CustomButton onClick={handleClickFavorite}>
						<FavoriteIcon fontSize='small' />
					</CustomButton>
				</Box>

				<ImageList cols={3}>
					{screenshots?.results?.map(item => (
						<ImageListItem key={item?.id}>
							<img style={{ width: '100%', cursor: 'pointer' }} src={item?.image} alt='game' />
						</ImageListItem>
					))}
				</ImageList>
			</Box>

			{srcMovie ? <video src={srcMovie} width='100%' controls={true} /> : null}
		</>
	)
}

export default CustomSingleGame
