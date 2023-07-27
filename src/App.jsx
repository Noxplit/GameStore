import { Box } from '@mui/material'
import Header from './components/header/Header'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AppRoutes from './components/Routes/AppRoutes'
import {  useSelector } from 'react-redux'

function App() {
 



  const {isOpenMenu} = useSelector(state => state.action)
	return (
		<Box sx={{ color: 'white', padding: '20px' }}>
			{isOpenMenu && <Navigation />}
			<Header />
			<AppRoutes />
			<Footer />
		</Box>
	)
}

export default App
