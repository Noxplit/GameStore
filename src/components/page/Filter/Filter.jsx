import { Box, Typography } from '@mui/material'
import GameFilters from './GameFilters'
import FilteredGameList from './FilteredGameList'
import { useState } from 'react'
import { useGetFilteredGamesQuery } from '../../../redux/rawGame'

const Filter = () => {
	const [select, setSelect] = useState('')
	const [games, setGames] = useState()
  const {data:filteredGames, isLoading} = useGetFilteredGamesQuery(select.toLowerCase())
  console.log(games);



  return (
    <Box sx={{padding:'20px 0'}}>
      <GameFilters filteredGames={filteredGames} setGames={setGames} setSelect={setSelect}/>
      {filteredGames?.count === 0 && <Typography textAlign='center' variant='h4'>Games not found</Typography> }
<FilteredGameList data={games}/>
    </Box>
  )
}

export default Filter