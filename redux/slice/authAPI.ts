import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginCredentials,
  SignupCredentials,
  VerificationData,
} from "@/types/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com" }),
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginCredentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation<any, SignupCredentials>({
      query: (credentials) => ({
        url: "/signup",
        method: "POST",
        body: credentials,
      }),
    }),

    verifyEmail: builder.mutation<any, VerificationData>({
      query: (verificationData) => ({
        url: "/verify-email",
        method: "POST",
        body: verificationData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useVerifyEmailMutation } =
  authApi;
