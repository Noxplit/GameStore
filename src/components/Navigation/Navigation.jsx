import { Box, Typography } from '@mui/material'
import NavigationList from './NavigationList';


const Navigation = () => {
  return (
    <Box width='15%' flex={1} backgroundColor='rgba(0,0,0,0.3)'  zIndex={100} position='fixed' display='flex' justifyContent='start' flexDirection='column'  alignItems='center' gap='100px' color='white' padding='5px' height='100vh'>
    <NavigationList/>
    </Box>
  )
}

export default Navigation