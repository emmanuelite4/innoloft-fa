import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VITE_API_BASE_URL } from "utils/env";

const baseQuery = fetchBaseQuery({
  baseUrl: VITE_API_BASE_URL,
  prepareHeaders(headers) {
    return headers;
  },
  credentials: "include",
});

enum TagTypesEnum {
  PRODUCT = "PRODUCT",
  UNKNOWN = "UNKNOWN",
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: Object.values(TagTypesEnum),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id: number) => `/product/${id}/`,
      providesTags: (_, __, id) => [{ type: TagTypesEnum.PRODUCT, id }],
    }),
    updateProductById: builder.mutation<boolean, any>({
      query: ({ id, ...body }) => ({
        url: `/product/${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, __, { id }) =>
        result ? [{ type: TagTypesEnum.PRODUCT, id }] : [TagTypesEnum.UNKNOWN],
    }),
    getTRL: builder.query({
      query: () => "/trl",
    }),
    getConfiguration: builder.query<any, { appId: number }>({
      query: (appId) => `/configuration/${appId}/`,
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useUpdateProductByIdMutation,
  useGetConfigurationQuery,
  useGetTRLQuery,
} = apiSlice;