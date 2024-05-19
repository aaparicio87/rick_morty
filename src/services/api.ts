import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './constants'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
 
  baseQuery: baseQueryWithRetry,

  endpoints: () => ({}),
})
