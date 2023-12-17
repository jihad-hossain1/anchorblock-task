import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in" }),
  endpoints: (builder) => ({
    //query
    getUsers: builder.query({
      query: () => "/api/users",
    }),
    getPaginatedUsers: builder.query({
      query: (pageNumber) => `/api/users?page=${pageNumber}`,
    }),
    searchUserQuery: builder.query({
      query: (first_name) => `/api/users/${first_name}`,
    }),
    getLogUser: builder.query({
      query: () => "/api/login",
    }),
    getUserById: builder.query({
      query: (id) => `/api/users/${id}`,
    }),
    //mutaion
    setUser: builder.mutation({
      query: (user) => ({
        url: "/api/users",
        method: "POST",
        body: user,
      }),
      
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/users/${id}`,
        method: 'PUT',
        body: data
      })
    }),
    deleteUser: builder.mutation({
      query: (id) =>({
          url: `/api/users/${id}`,
          method: 'DELETE',
      })
  })
    
  }),
});

export const {
  useGetUsersQuery,
  useSetUserMutation,
  useGetLogUserQuery,
  useGetPaginatedUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation
} = baseApi;
export default baseApi;
