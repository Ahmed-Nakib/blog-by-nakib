
import { axiosBaseQuery } from '@/redux/axiosBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({
     baseUrl: 'http://localhost:4000/api/v1'
     }),
  endpoints: () =>  ({

  })
})

