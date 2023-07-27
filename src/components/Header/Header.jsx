import * as React from 'react'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase, Typography } from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import GamepadIcon from '@mui/icons-material/Gamepad';
import { Link } from 'react-router-dom'
import { ROUTE } from '../../Constants/route'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenMenu, setSearchGame } from '../../redux/actionSlice/actionSlice'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CustomFlexBox from '../CustomFlexBox/CustomFlexBox';



export default function Header() {
  const inputContainer =  ({
    sx:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'5px',
    padding:'5px',
    textAlign:'center',
    backgroundColor:'#504147',
    borderRadius:'10px',
    }
  })

  const icons = {
    sx:{
    fontSize:'medium',
    cursor:'pointer',
    padding:'10px',
    backgroundColor:'#504147',
    borderRadius:'100%'
    }
  }
  const searchIcon = {
    sx:{
      fontSize:'medium',
      cursor:'pointer',
      padding:'10px',
      backgroundColor:'#504147',
      borderRadius:'100%',
    display:['flex', 'none', 'none']

      }
  }

  const dispatch = useDispatch()

  const containerFlex = {
    sx:{
    borderRadius:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'start',
    gap:'10px',
    }
  }
  const [value, setValue] = React.useState('')

  const handleSearch = () => {
dispatch(setSearchGame(value))
setValue('')
  }
  
	return (
			<Box   sx={{ backgroundColor: 'inherit'    }} position='static'>
      
          <Box {...containerFlex} >
            <CustomFlexBox>
          <GamepadIcon onClick={() => dispatch(setOpenMenu(true))}/>
					<Typography  variant='h6' component='div'>
          <Link  to={ROUTE.HOME} style={{color:'inherit', textDecoration:'none'}}>
						Joystore
          </Link>
					</Typography>
          </CustomFlexBox>
          <Box {...inputContainer}>
          {/* <CustomSelect /> */}
          </Box>

          <Box sx={{flexWrap:'wrap', gap:'5px', justifyContent:'end', display:'flex',}} >
          <Box
					{...inputContainer}>
						<SearchIcon onClick={handleSearch}/>
						<InputBase value={value} onChange={e => setValue(e.target.value)} sx={{ color: 'inherit', textAlign:'center', width:['120px','150px','200px'] }} placeholder='Search game...' />
					</Box>
          <Box {...containerFlex}>
          <FavoriteIcon {...icons}/>
          <NotificationsActiveIcon   {...icons}/>
          <LocalMallIcon {...icons}/>
          </Box>
       
          </Box>
          </Box>
					
					
			</Box>
	)
}
