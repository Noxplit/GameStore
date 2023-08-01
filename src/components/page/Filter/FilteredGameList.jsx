import { Box, CircularProgress, ImageList, ImageListItem, Typography } from '@mui/material'
import CustomTypography from '../../CustomComponents/customTypography/CustomTypography'
import CustomFlexBox from '../../CustomFlexBox/CustomFlexBox'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getId } from '../../../redux/actionSlice/actionSlice'
import { Link } from 'react-router-dom'

const FilteredGameList = ({ title, quantity = 6, data, loading, isGameExist }) => {
	const dispatch = useDispatch()
	const [seeMore, setSeeMore] = useState(false)

	const searchShort = data?.results.slice(0, quantity)
	const searchLong = data?.results

	const handleSingleGame = id => {
		dispatch(getId(id))
	}
	console.log(loading)

	if (loading) {
		return <CircularProgress color='inherit' />
	} else if (isGameExist) {
		return <></>
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
				{!seeMore
					? searchShort?.map(item => (
							<Link
								style={{ color: 'white', textDecoration: 'none' }}
								key={item?.id}
								to={`/game/${item?.id}`}>
								<ImageListItem
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
							</Link>
					  ))
					: searchLong?.map(item => (
							<Link
								style={{ color: 'white', textDecoration: 'none' }}
								key={item?.id}
								to={`/game/${item?.id}`}>
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
							</Link>
					  ))}
			</ImageList>
		</Box>
	)
}

export default FilteredGameList
