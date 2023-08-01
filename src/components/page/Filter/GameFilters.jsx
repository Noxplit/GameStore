import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useGetListGenresQuery } from '../../../redux/rawGame'
import CustomButton from '../../CustomComponents/CustomButton/CustomButton'

const GameFilters = ({ setSelect, setGames, filteredGames }) => {
	// const [price_min, setPrice_min] = useState('')
	// const [price_max, setPrice_max] = useState('')
	// const [params, setParams] = useState()
	const { data } = useGetListGenresQuery()
	const list = data?.results

	const handleSubmit = e => {
		e.preventDefault()
		setGames(filteredGames)
	}

	return (
		<form  onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', width:'100%' }}>

			<Select sx={{ color: 'white' }} 
  onChange={e => setSelect(e.target.value)}>
				{list?.map(item => (
					<MenuItem  key={item?.id} value={item?.name}>
						{item?.name}
					</MenuItem>
				))}
			</Select>

			<CustomButton type='submit'>Search</CustomButton>
		</form>
	)
}

export default GameFilters
