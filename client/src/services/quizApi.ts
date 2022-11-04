import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuizData } from "../models/models";
import {IRes} from "../models/models";


const baseUrl: string = "http://localhost:8080/quiz";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getJsQueries: builder.query<IRes, void>({
      query: () => "/js",
    }),
    getReactQueries: builder.query<any, void>({
      query: () => "/react",
    }),
    getHtmlCssQueries: builder.query<any, void>({
      query: () => "/htmlcss",
    }),
  }),
});

export const {
  useGetJsQueriesQuery,
  useGetHtmlCssQueriesQuery,
  useGetReactQueriesQuery,
} = quizApi;
