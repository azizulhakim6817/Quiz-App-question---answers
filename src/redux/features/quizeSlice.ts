import { quizeData } from "@/home/quizeData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: quizeData,
  currentQuestionIndex: 1,
  userAnswer: Array(quizeData.length).fill(null),
  quizComplete: false,
};

export const quizeSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswer[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    completeQuiz: (state) => {
      state.quizComplete = true;
    },
  },
});

export const { setAnswer, nextQuestion, previousQuestion, completeQuiz } =
  quizeSlice.actions;

export default quizeSlice.reducer;
