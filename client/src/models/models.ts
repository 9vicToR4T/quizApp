
export interface IQuizData {
  id: number;
  question: string;
  answears: {
    option: string;
    correct: boolean;
  }[];
}
