import { Route, Routes } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Game from '../page/Game/Game'
import { ROUTE } from '../../Constants/route'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Sidebar/>}/>
      <Route path={ROUTE.SINGLEPAGE} element={<Game/>}/>
    </Routes>
  )
}

export default AppRoutes