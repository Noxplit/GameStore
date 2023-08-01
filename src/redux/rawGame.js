import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY } from '../Constants/constants'

export const rawGame = createApi({
	reducerPath: 'rawGame',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.rawg.io/api/',
	}),
	endpoints: builder => ({
		getRawGame: builder.query({
			query: (page = 1) => `games?page=${page}&key=${API_KEY}`,
		}),
		getSingleGame: builder.query({
			query: id => `games/${id}?key=${API_KEY}`,
		}),
		getScreenshots: builder.query({
			query: id => `games/${id}/screenshots?key=${API_KEY}`,
		}),
		getMovie: builder.query({
			query: id => `games/${id}/movies?key=${API_KEY}`,
		}),
		getSearchGame: builder.query({
			query: search => `games?search=${search}&key=${API_KEY}`,
		}),
		getListGenres: builder.query({
			query: () => `genres?page_size=5&key=${API_KEY}`,
		}),
		getFilteredGames: builder.query({
			query: (params = 'action') => `games?genres=${params}&key=${API_KEY}`,
		}),
	}),
})

export const {
	useGetRawGameQuery,
	useGetSingleGameQuery,
	useGetScreenshotsQuery,
	useGetMovieQuery,
	useGetSearchGameQuery,
	useGetListGenresQuery,
	useGetFilteredGamesQuery,
} = rawGame
