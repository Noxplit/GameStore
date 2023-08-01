import { Box, Typography } from '@mui/material'
import GameFilters from './GameFilters'
import FilteredGameList from './FilteredGameList'
import { useState } from 'react'
import { useGetFilteredGamesQuery } from '../../../redux/rawGame'

const Filter = () => {
	const [select, setSelect] = useState('')
	const [games, setGames] = useState()
  const {data:filteredGames, isLoading} = useGetFilteredGamesQuery(select.toLowerCase())
  const isGameExist =  !games?.results.length


  return (
    <Box sx={{padding:'20px 0', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%', gap:'20px'}}>
      <GameFilters filteredGames={filteredGames} setGames={setGames} setSelect={setSelect}/>
      {isGameExist &&  <Typography textAlign='center' variant='h4'>Games not found</Typography> }
<FilteredGameList isGameExist={isGameExist} loading = {isLoading} data={games}/>
    </Box>
  )
}

export default Filter