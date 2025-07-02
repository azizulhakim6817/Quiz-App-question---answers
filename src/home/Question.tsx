import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControl from "./QuizControl";
import { setAnswer } from "@/redux/features/quizeSlice";

const Question = () => {
  const dispatch = useAppDispatch();

  const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quize
  );
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];

  const handleAnswer = (ans: string) => {
    dispatch(
      setAnswer({
        questionIndex: currentQuestionIndex,
        answer: ans,
      })
    );
    console.log(ans);
  };

  return (
    <div className=" flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            {currentQuestion.options.map((option, i) => (
              <Button
                variant={option === currentAnswer ? "default" : "outline"}
                onClick={() => handleAnswer(option)}
                className="w-full mt-3"
                size={"lg"}
                key={i}
              >
                {option}
              </Button>
            ))}
          </div>
          <QuizControl />
        </CardContent>
      </Card>
    </div>
  );
};

export default Question;
