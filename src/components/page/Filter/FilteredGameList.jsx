import { Box, ImageList, ImageListItem,  Typography } from '@mui/material'
import CustomTypography from '../../CustomComponents/customTypography/CustomTypography'
import CustomFlexBox from '../../CustomFlexBox/CustomFlexBox'
import { useGetRawGameQuery, useGetSearchGameQuery } from '../../../redux/rawGame'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getId } from '../../../redux/actionSlice/actionSlice'
import CustomButton from '../../CustomComponents/CustomButton/CustomButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Link } from 'react-router-dom'

const FilteredGameList = ({title, number, quantity = 6, data}) => {
	const [count, setCount] = useState(number)
	const dispatch = useDispatch()
	const [seeMore, setSeeMore] = useState(false)

	const searchShort = data?.results.slice(0, quantity)
	const searchLong = data?.results.slice(0, 15)

	const handleSingleGame = id => {
		dispatch(getId(id))
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
							<Link style={{color:'white', textDecoration:'none'}} key={item?.id} to={`/game/${item?.id}`}><ImageListItem
								
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
							</ImageListItem></Link>
					  ))
					: searchLong?.map(item => (
            <Link style={{color:'white', textDecoration:'none'}} key={item?.id} to={`/game/${item?.id}`}><ImageListItem
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
							</ImageListItem></Link>
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

export default FilteredGameList
