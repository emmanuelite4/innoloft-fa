import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VITE_API_BASE_URL } from "utils/env";
import {
  IProduct,
  IProductTRL,
  ProductUpdatePayload,
  TLayoutConfig,
} from "types";

const baseQuery = fetchBaseQuery({
  baseUrl: VITE_API_BASE_URL,
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
    getProductById: builder.query<IProduct, number | string>({
      query: (id) => `/product/${id}/`,
      providesTags: (_, __, id) => [{ type: TagTypesEnum.PRODUCT, id }],
    }),
    updateProductById: builder.mutation<boolean, ProductUpdatePayload>({
      query: ({ id, ...body }) => ({
        url: `/product/${id}/`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, __, { id }) =>
        result ? [{ type: TagTypesEnum.PRODUCT, id }] : [TagTypesEnum.UNKNOWN],
    }),
    getTRL: builder.query<IProductTRL[], void>({
      query: () => "/trl/",
    }),
    getConfiguration: builder.query<TLayoutConfig, number | string>({
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
