
import { ApiResponse, ApiResponseByID, Opportunity } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const opportunitiesAPI = createApi({
  reducerPath: "opportunitiesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com" }),
  endpoints: (builder) => ({
    getOpportunities: builder.query<ApiResponse, void>({
        query: () => '/opportunities/search',
      }),
      getOpportunityById: builder.query<ApiResponseByID, string>({
        query: (id) => `/opportunities/${id}`,
      }),
  }),
});

export const { useGetOpportunitiesQuery, useGetOpportunityByIdQuery } = opportunitiesAPI;
