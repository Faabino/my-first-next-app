import React from "react";
import data from "../data/data.json";
import { shuffleQuestions } from "../utils/shuffleQuestions";

shuffleQuestions(data.inputQuestions);
let index = 0;

export default function InputFlashcard() {
  const [value, setValue] = React.useState("");
  const [rightAnswer, setRightAnswer] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [questions, setQuestions] = React.useState(data.inputQuestions);
  let answer = questions[index].answer;

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
              <input
                type="text"
                className="form-control"
                id="answer"
                placeholder="Type your answer here..."
                onChange={checkInput}
              ></input>
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
