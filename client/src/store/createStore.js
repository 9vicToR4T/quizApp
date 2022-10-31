import { configureStore } from "@reduxjs/toolkit";
import { quizApi } from "../services/quizApi";

export default configureStore({
  reducer: { [quizApi.reducerPath]: quizApi.reducer },
});
