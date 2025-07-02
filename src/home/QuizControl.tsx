import { Button } from "@/components/ui/button";
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quizeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControl = () => {
  const dispatch = useAppDispatch();

  const { questions, currentQuestionIndex, userAnswer, quizComplete } =
    useAppSelector((state) => state.quize);

  const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;

  const handleNext = () => {
    if (isAnswerSelected) {
      dispatch(nextQuestion());
    }
  };
  const handleprevious = () => {
    dispatch(previousQuestion());
  };

  // Handle the "Complete Quiz" button click
  const handleCompleteQuiz = () => {
    dispatch(completeQuiz());
  };

  const isCompleteEnabled =
    isAnswerSelected || currentQuestionIndex !== questions.length - 1;

  return (
    <div className=" flex justify-between mt-4 space-x-4">
      {/* Previous Button */}
      <Button
        onClick={handleprevious}
        disabled={currentQuestionIndex === 0 || quizComplete}
      >
        Previous
      </Button>

      {/* Next Button */}
      {currentQuestionIndex < questions.length - 1 && !quizComplete && (
        <Button onClick={handleNext} disabled={!isAnswerSelected}>
          Next
        </Button>
      )}

      {/* Complete Quiz Button */}
      {currentQuestionIndex === questions.length - 1 && !quizComplete && (
        <Button onClick={handleCompleteQuiz} disabled={!isCompleteEnabled}>
          Complete Quiz
        </Button>
      )}
    </div>
  );
};

export default QuizControl;
