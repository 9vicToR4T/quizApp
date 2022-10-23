import React, { useState, useEffect } from "react";
import { IQuizData } from "../models/models";
import QuizCard from "../components/quizCard";

const arr: IQuizData[] = [
  {
    id: 1,
    question: "What is CSS?",
    answears: [
      {
        option: "A programing language for server side rendering.",
        correct: false,
      },
      {
        option:
          "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).",
        correct: true,
      },
      {
        option:
          "Multiparadigm programing language with dinamic data types which work whery well in browser and not only there.",
        correct: false,
      },
      {
        option:
          "Cascading style sizes.",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "What is HTML?",
    answears: [
      { option: "Hyper Total Mamam Language.", correct: false },
      { option: "Hy To My Love.", correct: false },
      {
        option: "Hyper Total Markup Language.",
        correct: false,
      },
      {
        option: "Hyper Text Markup Language.",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question: "What is JS?",
    answears: [
      { option: "Markup language.", correct: false },
      { option: "Arabic language.", correct: false },
      {
        option:
          "Multiparadigm programing language with dinamic data types which work whery well in browser and not only there.",
        correct: true,
      },
      {
        option:
          "Is a programming language whit a porpuse resolve difficult mathematic problems for science.",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "What is DOM?",
    answears: [
      {
        option: "The Document One Model for working with databsese.",
        correct: false,
      },
      {
        option:
          "The Document Object Model (DOM) for creating easier requests to server.",
        correct: false,
      },
      {
        option:
          "Multiparadigm programing language with dinamic data types which work whery well in browser and not only there.",
        correct: false,
      },
      {
        option:
          "The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.",
        correct: true,
      },
    ],
  },
];
interface IA {
  option: string;
  correct: boolean;
}
  
export const Quizzes = () => {
  const [quiz, setQuiz] = useState<string>('');
  const [answears, setAnswears] = useState <IA[]>([])
  const [quizNr, setQuizNr] = useState<number>(0);
  const [userPoints, setUserPoints] = useState(0);

  useEffect(() => {
    setQuiz(arr[quizNr].question);
    setAnswears(arr[quizNr].answears)
  }, [quizNr]);

  const handleUserAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  
    
      if (event.currentTarget.value === "true") {
      setUserPoints((prevState) => prevState + 1);
    }
    setQuizNr((prevState) => prevState + 1);
  };

  
  return (
    <div className="w-full h-[100vh] bg-[color:var(--yellow-light)]">
      <div className="container">
        <div className="w-full flex items-center flex-col">
          <h2>JavaScript quizzes for a better understanding!!</h2>
          <p className="text-[color:var(--red-light)]">You can do it!</p>
          {<QuizCard quiz={quiz} answears={answears} handleUserAnswer={handleUserAnswer} userPoints={userPoints}/>}
        </div>
      </div>
    </div>
  );
};
