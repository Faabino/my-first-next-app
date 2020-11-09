import React from "react";
import data from "../data/data.json";
import { shuffleQuestions } from "../utils/shuffleQuestions";

shuffleQuestions(data.radioQuestions);
let index = 0;

export default function RadioFlashcard() {
  const [value, setValue] = React.useState("");
  const [rightAnswer, setRightAnswer] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [questions, setQuestions] = React.useState(data.radioQuestions);

  let answer = questions[index].rightAnswer;
  let wrongAnswers = questions[index].wrongAnswers;

  const checkInput = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    setRightAnswer(answer === value);
    setSubmitted(true);
    event.preventDefault();
  };

  if (!submitted) {
    return (
      <>
        <div className="card">
          <div className="bg-dark card-body">
            <p>{questions[index].question}</p>
            <form onSubmit={handleSubmit}>
              <div className="form-check d-flex">
                <input
                  className="form-check-input"
                  type="radio"
                  name="firstAnswer"
                  id="firstAnswer"
                  value={answer}
                  onChange={checkInput}
                  checked={value === answer}
                />
                <label className="form-check-label" htmlFor="firstAnswer">
                  {answer}
                </label>
              </div>
              {wrongAnswers.map((wrongAnswer) => (
                <div className="form-check d-flex">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="secondAnswer"
                    id={wrongAnswer}
                    value={wrongAnswer}
                    onChange={checkInput}
                    checked={value === wrongAnswer}
                  />
                  <label className="form-check-label" htmlFor={wrongAnswer}>
                    {wrongAnswer}
                  </label>
                </div>
              ))}
              <button type="submit" className="btn btn-primary btn-flashcard">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  } else if (rightAnswer) {
    return (
      <div
        className="card"
        onClick={() => {
          setSubmitted(false);
          if (index === questions.length - 1) {
            index = 0;
          } else {
            ++index;
          }
        }}
      >
        <div className="bg-success card-body clickable-card">
          Good job! {answer} is the correct answer!
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="card"
        onClick={() => {
          setSubmitted(false);
          if (index === questions.length - 1) {
            index = 0;
          } else {
            ++index;
          }
        }}
      >
        <div className="bg-danger card-body clickable-card">
          {answer} was the correct answer! :(
        </div>
      </div>
    );
  }
}
