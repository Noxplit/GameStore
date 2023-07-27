import { Box, ImageList, ImageListItem, Skeleton, Typography } from '@mui/material'
import CustomTypography from '../CustomComponents/customTypography/CustomTypography'
import CustomFlexBox from '../CustomFlexBox/CustomFlexBox'
import { useGetRawGameQuery } from '../../redux/rawGame'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getId } from '../../redux/actionSlice/actionSlice'
import CustomButton from '../CustomComponents/CustomButton/CustomButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const GameList = () => {
  const [count, setCount] = useState(1)
	const dispatch = useDispatch()
	const [seeMore, setSeeMore] = useState(false)
	const { data, isLoading} = useGetRawGameQuery(count)
	const gamesShort = data?.results.slice(0, 3)
	const gamesLong = data?.results.slice(0, 9)

	const handleSingleGame = id => {
		dispatch(getId(id))
	}
if (isLoading) {
  return <Typography>LOADING...</Typography>
}

	return (
		<Box>
			<CustomFlexBox>
				<CustomTypography>GameList</CustomTypography>
				<Typography onClick={() => setSeeMore(!seeMore)} sx={{ cursor: 'pointer' }}>
					{!seeMore ? 'See more' : 'Return'}
				</Typography>
			</CustomFlexBox>
			<ImageList cols={3}>
				{!seeMore
					? gamesShort?.map(item => (
					
								<ImageListItem
									key={item?.id}
									sx={{
										marginRight: '5px',
										'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius:'5px' },
										padding: '5px',
									}}>
									<img
										onClick={() => handleSingleGame(item.id)}
										style={{ cursor: 'pointer', borderRadius: '5px', height: '200px' }}
										src={item?.background_image}
										alt='rrr'
										loading='lazy'
									/>
									<Typography fontSize='10px'>{item?.name}</Typography>
								</ImageListItem>
               
               ))
               : gamesLong?.map(item => (
                 <ImageListItem
                 key={item?.id}
                 sx={{
                   marginRight: '5px',
                   '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                   padding: '5px',
                   borderRadius:'5px'
                   
                  }}>
								<img
									onClick={() => handleSingleGame(item.id)}
									style={{ cursor: 'pointer', borderRadius: '5px', height: '150px' }}
									src={item?.background_image}
									alt='rrr'
									loading='lazy'
                  />
								<Typography fontSize='10px'>{item?.name}</Typography>
							</ImageListItem>
					  ))}
				<CustomButton height='10px' onClick={() => setCount(count - 1)}><ArrowBackIosIcon/></CustomButton>
				<CustomButton onClick={() => setCount(count + 1)}><ArrowForwardIosIcon/></CustomButton>
			</ImageList>
		</Box>
	)
}

export default GameList
