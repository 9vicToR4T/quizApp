import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="h-[50px] w-full bg-[color:var(--carrot)] text-white font-bold flex items-center px-4">
      <Link to="/" className="nav-btn">Home</Link>
      <Link to="/quizzes" className="nav-btn">Quizzes</Link>
    </nav>
  );
};
