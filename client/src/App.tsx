import React from "react";
import { Route, Routes } from "react-router-dom";
import {JsQuestionsPage} from "./components/jsQuestionsPage";
import { Navigation } from "./components/navigation";
import { Main } from "./pages/main";
import { Quizzes } from "./pages/quizzes";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/quizzes" element={<Quizzes/>}>
          <Route path="js" element={<JsQuestionsPage/>}/>
        </Route>
      </Routes>

    </>
  );
}

export default App;
