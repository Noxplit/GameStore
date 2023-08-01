import { Box, Input, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const CustomSearch = ({value, setValue, handleSearch, placeholder = 'Search game...', icon=true}) => {
  const inputContainer = {
		sx: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '5px',
			padding: '5px',
			textAlign: 'center',
			backgroundColor: '#504147',
			borderRadius: '10px',
		},
	}
  return (
    <Box {...inputContainer}>
    {icon && <SearchIcon sx={{ cursor: 'pointer' }} onClick={handleSearch} />}
    <InputBase
      value={value}
      onChange={setValue}
      sx={{ color: 'inherit', textAlign: 'center', width: ['120px', '150px', '200px'] }}
      placeholder={placeholder}
    />
  </Box>
  )
}

export default CustomSearch