import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hooks";

const getPerformance = (percentage: number) => {
  if (percentage >= 90) {
    return { rating: "Excellent", color: "bg-green-800" };
  } else if (percentage >= 50) {
    return { rating: "Good", color: "bg-yellow-500" };
  } else if (percentage >= 30) {
    return { rating: "Needs Improvment", color: "bg-orange-500" };
  } else {
    return { rating: "Poor", color: "bg-red-500" };
  }
};
const QuizSummery = () => {
  const { questions, userAnswer } = useAppSelector((state) => state.quize);
  console.log(userAnswer);

  // caltulate currect Answer---
  const correctAnswerCount = questions.reduce((count, questions, inx) => {
    return questions.correctAnswer === userAnswer[inx] ? count + 1 : count;
  }, 0);

  // calculate incurrect Answer----
  const incurrectAnswerCount = questions.length - correctAnswerCount;

  // currect % ---------
  const currectPercentage = parseFloat(
    ((correctAnswerCount / questions.length) * 100).toFixed(2)
  );
  console.log(correctAnswerCount, incurrectAnswerCount, currectPercentage);

  // rating--color ----------------------------
  const { rating, color } = getPerformance(currectPercentage);
  return (
    <div>
      <Card className="max-w-lg mx-auto p-6 shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className=" text-2xl font-bold">Quiz Summery</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-medium mb-4">
            You got ( {correctAnswerCount} ) out of totals Questions ({" "}
            {questions.length} )
          </h3>
          <div>
            <div className="mb-2">
              <Progress
                value={currectPercentage}
                className={`"h-4 rounded-full" ${color}`}
              />
            </div>
            <div className=" flex justify-between">
              <span className="text-sm">{currectPercentage}%</span>
              <span className=" text-sm">Preformance : {rating}</span>
            </div>
            <div className="mb-4">
              <p className="text-sm">
                <strong>Incorrect Answer : </strong> {incurrectAnswerCount}
              </p>
            </div>
            <div className=" mb-4">
              <p>Great Job Keep practicing</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSummery;
