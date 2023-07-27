import { Typography } from '@mui/material'

const CustomTypography = ({children}) => {
  return (
    <Typography sx={{fontSize:['25px','30px','45px'], fontWeight:'bold', color:'white'}}>{children}</Typography>
  )
}

export default CustomTypography