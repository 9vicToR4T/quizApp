
export interface IQuizData {
  id: number;
  question: string;
  answears: {
    option: string;
    correct: boolean;
  }[];
}


export interface IRes {
  currentData: [];
  data: [];
  endpointName: string;
  fulfilledTimeStamp: number;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isUninitialized: boolean;
  refetch: () => void;
  requestId: string;
  startedTimeStamp: number;
  status: string;
}