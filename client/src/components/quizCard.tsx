import { ReactNode } from 'react';
import { IQuizData } from '../models/models';

interface Props {
  quizNr: number;
  quiz: string;
  answears:{
    option: string;
    correct: boolean
  }[];
  handleUserAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userPoints: number;
}

const QuizCard : React.FC<Props>= ({quizNr, quiz, answears, handleUserAnswer, userPoints }) => {
  return (
    <>
      <div>Your points: {userPoints}</div>
      <div className="flex flex-col">
        <p className="text-[color:var(--red)] text-center p-4 bg-[color:white] rounded-md my-4 shadow-2xl">
         {quizNr}. {quiz}

        </p>
        {answears.map((el) => {
          return (
            <button
            disabled={!el.correct}
              className="p-4 bg-[color:var(--yellow)] rounded-lg mb-4 cursor-pointer hover:shadow-lg hover:scale-105 hover:delay-75 duration-300"
              key={el.option}
              onClick={(event) => handleUserAnswer(event)}
              value={el.correct.toString()}
            >
              {el.option}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default QuizCard;