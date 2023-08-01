import { Route, Routes } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Game from '../page/Game/Game'
import { ROUTE } from '../../Constants/route'
import Cart from '../page/Cart/Cart'
import Favorite from '../page/Favorite/Favorite'
import Checkout from '../page/Checkout/Checkout'
import Filter from '../page/Filter/Filter'
import { Box, CircularProgress } from '@mui/material'
import CustomFlexBox from '../CustomFlexBox/CustomFlexBox'

const AppRoutes = ({loading}) => {
  const fullLoading = loading?.loadingGame && loading?.loadingGameList
  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    {fullLoading && <CircularProgress size={70} sx={{margin:'100px'}}/> }
    <Box sx={{display: fullLoading  ? "none" : 'flex'}}>
    <Routes>
      <Route path={ROUTE.HOME} element={<Sidebar/>}/>
      <Route path={ROUTE.SINGLEPAGE} element={<Game/>}/>
      <Route path={ROUTE.FAVORITE} element={<Favorite/>}/>
      <Route path={ROUTE.CHECKOUT} element={<Checkout/>}/>
      <Route path={ROUTE.CART} element={<Cart/>}/>
      <Route path={ROUTE.FILTER} element={<Filter/>}/>
    </Routes>
    </Box>
    </Box>
  )
}

export default AppRoutes