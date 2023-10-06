import React from "react";

const Questions = ({
  questions,
  choosedAnswers,
  cheatAnswers,
  setChoosedAnswers,
  setProgress,
  checkAnswers,
}) => {
  const addAnswer = (answer) => {
    let answers = choosedAnswers;
    answers[questions.question] = answer;
    setChoosedAnswers(answers);
    setProgress(Object.keys(answers).length);
    checkAnswers(cheatAnswers, choosedAnswers);
  };

  return (
    <div className="questions">
      <div className="question">{questions.question}</div>
      <ul className="answers">
        {questions.answers.map((item) => (
          <li className="answer" key={item}>
            <label>
              <input
                type="radio"
                name={questions.question}
                value={item}
                onChange={() => addAnswer(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
