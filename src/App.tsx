import Question from "./home/Question";
import QuizSummery from "./home/QuizSummery";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  const { quizComplete } = useAppSelector((state) => state.quize);

  return (
    <div>
      <h1 className=" text-center text-5xl my-12 font-bold">Quiz App</h1>
      {!quizComplete ? <Question /> : <QuizSummery />}
    </div>
  );
};

export default App;
