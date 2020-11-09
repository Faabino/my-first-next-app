import React from "react";
import data from "../data/data.json";
import { shuffleQuestions } from "../utils/shuffleQuestions";

shuffleQuestions(data.inputQuestions);
let index = 0;

export default function SimpleFlashcard() {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [questions, setQuestions] = React.useState(data.inputQuestions);

  return (
    <>
      {showAnswer ? (
        <div className="card">
          <div
            id="simpleCard"
            className="bg-light text-dark card-body clickable-card"
            onClick={() => {
              setShowAnswer(false);
              if (index === questions.length - 1) {
                index = 0;
              } else {
                ++index;
              }
            }}
          >
            <p>Response :</p>
            <p>{data.mentalQuestions[index].answer}</p>
          </div>
        </div>
      ) : (
        <div className="card">
          <div
            id="simpleCard"
            className="bg-dark card-body clickable-card"
            onClick={() => {
              setShowAnswer(true);
            }}
          >
            <p>Question :</p>
            <p>{data.mentalQuestions[index].question}</p>
          </div>
        </div>
      )}
    </>
  );
}
