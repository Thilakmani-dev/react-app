/* eslint-disable react/prop-types */
import { useState } from "react";
import quizData from "../quiz.json";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [allAnswers, setAnswers] = useState([]);

  function handleClickingAnswer(isCorrect) {
    setCurrentQuestion((prev) => prev + 1);
    setAnswers([...allAnswers, isCorrect]);
  }

  function handleReset() {
    setCurrentQuestion(0);
    setAnswers([]);
  }

  return (
    <>
      <Question
        currentQuestion={currentQuestion}
        onChooseAnswer={handleClickingAnswer}
      />
      <Results results={allAnswers} handleReset={handleReset} />
    </>
  );
};

const Question = ({ currentQuestion, onChooseAnswer }) => {
  if (currentQuestion > quizData.quizzes.length - 1) return;
  let { question, answers } = quizData.quizzes[currentQuestion];
  return (
    <div className="questionBox">
      <p>{question}</p>
      <div className="answers">
        {answers.map((answer, index) => (
          <button key={answer} onClick={() => onChooseAnswer(index)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

const Results = ({ results, handleReset }) => {
  let quizzes = quizData.quizzes;

  if (results.length !== quizzes.length) return;
  return (
    <>
      <div onClick={handleReset} className="retry">
        Click here to retry
      </div>
      <ul className="results">
        {results.map((result, index) => (
          <li
            key={result}
            data-correct={quizzes[index].correctAnswer === result}
          >
            {quizzes[index].question}
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuizApp;
