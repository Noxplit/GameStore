import { Box, ImageList, ImageListItem, Skeleton, Typography } from '@mui/material'
import CustomTypography from '../CustomComponents/customTypography/CustomTypography'
import CustomFlexBox from '../CustomFlexBox/CustomFlexBox'
import { useGetRawGameQuery, useGetSearchGameQuery } from '../../redux/rawGame'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getId } from '../../redux/actionSlice/actionSlice'
import CustomButton from '../CustomComponents/CustomButton/CustomButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const GameList = ({title, number, quantity = 6}) => {
	const [count, setCount] = useState(number)
	const { search } = useSelector(state => state.action)
	const dispatch = useDispatch()
	const [seeMore, setSeeMore] = useState(false)
	const { data } = useGetRawGameQuery(count)
	const { data: dataSearch } = useGetSearchGameQuery(search)
	const gamesShort = data?.results.slice(0, quantity)
	const gamesLong = data?.results.slice(0, 17)
	const searchShort = dataSearch?.results.slice(0, quantity)
	const searchLong = dataSearch?.results.slice(0, 15)

	const handleSingleGame = id => {
		dispatch(getId(id))
	}


	if (!search) {
		return (
			<Box>
				<CustomFlexBox>
					<CustomTypography>{title}</CustomTypography>
					<Typography onClick={() => setSeeMore(!seeMore)} sx={{ cursor: 'pointer' }}>
						{!seeMore ? 'See more' : 'Return'}
					</Typography>
				</CustomFlexBox>
				<ImageList cols={3}>
					{seeMore
						? gamesLong.map(item => (
								<ImageListItem
									key={item?.id}
									sx={{
										marginRight: '5px',
										'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px' },
										padding: '5px',
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
						  ))
						: gamesShort?.map(item => (
								<ImageListItem
									key={item?.id}
									sx={{
										marginRight: '5px',
										'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
										padding: '5px',
										borderRadius: '5px',
									}}>
									<img
										onClick={() => handleSingleGame(item.id)}
										style={{ cursor: 'pointer', borderRadius: '5px', height:'150px' }}
										src={item?.background_image}
										alt='rrr'
										loading='lazy'
									/>
									<Typography fontSize='10px'>{item?.name}</Typography>
								</ImageListItem>
						  ))}

					<CustomButton height='10px' onClick={() => setCount(count - 1)}>
						<ArrowBackIosIcon />
					</CustomButton>
					<CustomButton onClick={() => setCount(count + 1)}>
						<ArrowForwardIosIcon />
					</CustomButton>
				</ImageList>
			</Box>
		)
	}

	return (
		<Box>
			<CustomFlexBox>
				<CustomTypography>{title}</CustomTypography>
				<Typography onClick={() => setSeeMore(!seeMore)} sx={{ cursor: 'pointer' }}>
					{!seeMore ? 'See more' : 'Return'}
				</Typography>
			</CustomFlexBox>
			<ImageList cols={3}>
				{seeMore
					? searchShort.map(item => (
							<ImageListItem
								key={item?.id}
								sx={{
									marginRight: '5px',
									'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px' },
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
					: searchLong?.map(item => (
							<ImageListItem
								key={item?.id}
								sx={{
									marginRight: '5px',
									'&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
									padding: '5px',
									borderRadius: '5px',
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

				<CustomButton height='10px' onClick={() => setCount(count - 1)}>
					<ArrowBackIosIcon />
				</CustomButton>
				<CustomButton onClick={() => setCount(count + 1)}>
					<ArrowForwardIosIcon />
				</CustomButton>
			</ImageList>
		</Box>
	)
}

export default GameList
