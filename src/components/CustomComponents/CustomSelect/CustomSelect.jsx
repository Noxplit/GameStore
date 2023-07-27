import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const CustomSelect = () => {
  return (
    <FormControl  fullWidth>
      <InputLabel sx={{color:'white'}} id="demo-simple-select-label">Genre</InputLabel>
  <Select
  sx={{ width:'200px', height:'40px', color:'white' }}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Genre"
  >
    <MenuItem value={'1'}>All</MenuItem>
    <MenuItem value={'2'}>Twenty</MenuItem>
    <MenuItem value={'3'}>Thirty</MenuItem>
  </Select>
</FormControl>
  )
}

export default CustomSelect