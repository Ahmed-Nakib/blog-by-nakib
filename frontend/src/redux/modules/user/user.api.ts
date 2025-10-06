import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                method: "POSt",
                url: "/user/create-user",
                body: data
            })
        })
    })
})


export const {useSignUpMutation} =userApi;


