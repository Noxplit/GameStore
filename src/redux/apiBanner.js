import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { mathRandom } from '../Constants/constants'

export const apiBanner = createApi({
	reducerPath: 'apiBanner',
	baseQuery: fetchBaseQuery({
		headers: {
			'X-RapidAPI-Key': '406e13fe73mshba599c021ed7dc5p10dbe0jsnc04b14e8dc13',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		},
		baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api',
	}),
	endpoints: builder => ({
		getBannerGame: builder.query({
			query: () => `/game?id=${mathRandom(1, 100)}`,
		}),
    getAllGames: builder.query({
      query: () => `/games`,
    }),
    // getSingleGame: builder.query({
    //   // query: () => `/games:id`,
    // })
	}),
})

export const { useGetBannerGameQuery, useGetAllGamesQuery } = apiBanner
