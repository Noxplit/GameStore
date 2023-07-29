import { Route, Routes } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Game from '../page/Game/Game'
import { ROUTE } from '../../Constants/route'
import Cart from '../page/Cart/Cart'
import Favorite from '../page/Favorite/Favorite'
import Checkout from '../page/Checkout/Checkout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Sidebar/>}/>
      <Route path={ROUTE.SINGLEPAGE} element={<Game/>}/>
      <Route path={ROUTE.FAVORITE} element={<Favorite/>}/>
      <Route path={ROUTE.CHECKOUT} element={<Checkout/>}/>
      <Route path={ROUTE.CART} element={<Cart/>}/>
    </Routes>
  )
}

export default AppRoutes