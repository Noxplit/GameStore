import { Box, CircularProgress } from '@mui/material'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AppRoutes from './components/Routes/AppRoutes'
import {  useSelector } from 'react-redux'

function App() {
 
const {loading} = useSelector(state => state.loading)
const {isOpenMenu} = useSelector(state => state.action)



	return (
		<Box sx={{ color: 'white', padding: '20px' }}>
			{isOpenMenu && <Navigation />}
			<Header />
			<AppRoutes loading={loading} />
			<Footer />
		</Box>
	)
}

export default App
