import { Box } from '@mui/material'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react'
import CloseIcon from '@mui/icons-material/Close'
import CustomButton from '../CustomButton/CustomButton'
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

const PhotoSwiper = ({ setSwiper, link }) => {
	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				backgroundColor: 'rgba(0,0,0,0.7)',
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<CloseIcon
				onClick={() => setSwiper(false)}
				sx={{ position: 'fixed', top: '20%', zIndex: 60, right: 0 }}
			/>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				loop={true}
				navigation={true}
				effect='coverflow'
				grabCursor={true}>
				{link?.map(item => (
					<SwiperSlide
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '500px',
						}}
						key={item.id}>
						<img style={{ width: '90%' }} src={item.image} />
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}

export default PhotoSwiper
