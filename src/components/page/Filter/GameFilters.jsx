import { MenuItem, Select } from '@mui/material'
import {  useGetListGenresQuery } from '../../../redux/rawGame'
import CustomButton from '../../CustomComponents/CustomButton/CustomButton'


const GameFilters = ({setSelect, setGames,filteredGames}) => {
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
		<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
			{/* <input type='price_min' name='price_min' onChange={e => setPrice_min(e.target.value)} value={price_min} required  placeholder='Price min'/>
<input type='price_max' name='price_max' onChange={e => setPrice_max(e.target.value)} value={price_max} required  placeholder='Price min'/> */}

			<Select defaultValue='action' onChange={e => setSelect(e.target.value)}>
				{list?.map(item => (
					<MenuItem key={item?.id} value={item?.name}>
						{item?.name}
					</MenuItem>
				))}
			</Select>

			<CustomButton type='submit'>Search</CustomButton>
		</form>
	)
}

export default GameFilters
