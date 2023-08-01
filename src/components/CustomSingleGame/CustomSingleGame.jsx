import { Box, CircularProgress, ImageList, ImageListItem, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CustomButton from '../CustomComponents/CustomButton/CustomButton'
import CustomIcons from '../CustomComponents/CustomIcons/CustomIcons'
import CustomGenre from '../CustomComponents/CustomGenre/CustomGenre'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import {  useSelector } from 'react-redux'
import { useGetMovieQuery, useGetScreenshotsQuery, useGetSingleGameQuery } from '../../redux/rawGame'
import CustomBuyAndFav from '../CustomComponents/CustomBuyAndFavorite/CustomBuyAndFav'
import { useState } from 'react'
import PhotoSwiper from '../CustomComponents/PhotoSwiper/PhotoSwiper'

const CustomSingleGame = () => {
	const { id } = useSelector(state => state.action)
	const { data: screenshots, isLoading:loadingScreen } = useGetScreenshotsQuery(id)
	const { data, isLoading:loadingGame } = useGetSingleGameQuery(id)
	const { data: movie, isLoading:loadingMovie } = useGetMovieQuery(id)
	const srcMovie = movie?.results[0]?.data?.max
const [swiper,setSwiper] = useState(false)

console.log(swiper);


if(loadingScreen, loadingGame, loadingMovie ) {
  return <CircularProgress size={50} sx={{margin:'100px'}} color='inherit'/>
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

	<CustomBuyAndFav data={data}/>
				</Box>

				<ImageList cols={3}>
					{screenshots?.results?.map(item => (
						<ImageListItem key={item?.id}>
							<img onClick={() => setSwiper(true)} style={{ width: '100%', cursor: 'pointer' }} src={item?.image} alt='game' />
						</ImageListItem>
					))}
				</ImageList>
        {swiper && <PhotoSwiper swiper={swiper} setSwiper={setSwiper} link={screenshots?.results}/>}
			</Box>

			{srcMovie ? <video src={srcMovie} width='100%' controls={true} /> : null}
		</>
	)
}

export default CustomSingleGame
