import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuizData } from "../models/models";

const baseUrl: string = "http://localhost:8080/quiz";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getJsQueries: builder.query<IQuizData, void>({
      query: () => "/js",
    }),
  }),
});

export const { useGetJsQueriesQuery } = quizApi;
