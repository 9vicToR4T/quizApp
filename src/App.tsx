import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Main } from "./pages/main";
import { Quizzes } from "./pages/quizzes";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/quizzes" element={<Quizzes/>}/>
      </Routes>

    </>
  );
}

export default App;
