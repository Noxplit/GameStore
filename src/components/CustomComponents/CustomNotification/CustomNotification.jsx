import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const CustomNotification = ({children, link, state}) => {
  return (
    <Link style={{ textDecoration: 'none', color: 'white' }} to={link}>
							<Box sx={{ position: 'relative' }}>
							
						{children}
           {state.length ? <FiberManualRecordIcon
                fontSize='1px'
									sx={{
										position: 'absolute',
										top: -5,
										right: -2,
                    color:'white'
									}} /> : ''} 
							</Box>
						</Link>
  )
}

export default CustomNotification