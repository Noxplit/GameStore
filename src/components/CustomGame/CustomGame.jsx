import { Box, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CustomButton from '../CustomComponents/CustomButton/CustomButton'
import CustomIcons from '../CustomComponents/CustomIcons/CustomIcons'
import CustomGenre from '../CustomComponents/CustomGenre/CustomGenre'
import { Link } from 'react-router-dom'
import { useGetSingleGameQuery } from '../../redux/rawGame'
import {  useDispatch, useSelector } from 'react-redux'
import { setSingleGame } from '../../redux/actionSlice/actionSlice'
import { useEffect } from 'react'

const CustomGame = () => {
	const { id } = useSelector(state => state.action)
	const { data } = useGetSingleGameQuery(id)
  const dispatch = useDispatch()
  useEffect(() => {dispatch(setSingleGame(data))},[data])
  


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

					<CustomButton>Add to Cart</CustomButton>

					<CustomIcons>
						<ShoppingCartIcon fontSize='small' />
					</CustomIcons>
					<CustomIcons>
						<FavoriteIcon fontSize='small' />
					</CustomIcons>
				</Box>
			</Box>
		</>
	)
}

export default CustomGame
