import * as React from 'react'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase, Typography } from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import GamepadIcon from '@mui/icons-material/Gamepad';
import { Link } from 'react-router-dom'
import { ROUTE } from '../../Constants/route'
import CustomSelect from '../CustomComponents/CustomSelect/CustomSelect'
import { useDispatch } from 'react-redux'
import { setOpenMenu } from '../../redux/actionSlice/actionSlice'
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function Header() {
  const inputContainer =  ({
    sx:{
    display:['none','flex', 'flex'],
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
    justifyContent: ['end', 'space-between', 'space-between'],
    alignItems:'center',
    gap:'10px',
    }
  }
  
	return (
			<Box   sx={{ backgroundColor: 'inherit'    }} position='static'>
      
          <Box {...containerFlex} >
          <GamepadIcon onClick={() => dispatch(setOpenMenu(true))}/>
					<Typography  variant='h6' component='div' sx={{ flexGrow: 1, display:'flex' }}>
          <Link  to={ROUTE.HOME} style={{color:'inherit', textDecoration:'none'}}>
						Joystore
          </Link>
					</Typography>
          <Box {...inputContainer}>
          {/* <CustomSelect /> */}
          </Box>
          <Box
					{...inputContainer}>
						<SearchIcon />
						<InputBase sx={{ color: 'inherit', textAlign:'center' }} placeholder='Search game...' />
					</Box>
          <Box {...containerFlex}>
          <SearchIcon {...searchIcon} />
          <FavoriteIcon {...icons}/>
          <NotificationsActiveIcon   {...icons}/>
          <LocalMallIcon {...icons}/>
          </Box>
          </Box>
					
					
			</Box>
	)
}
