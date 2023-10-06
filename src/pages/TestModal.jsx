import React, { useState } from "react";
import MyModal from "../components/UI/MyModal/MyModal";
import Questions from "../components/Questions";

const TestModal = () => {
  const [visible, setVisible] = useState(false);
  const [questions, setQuestions] = useState({
    question: null,
    answers: [1, 2, 3],
  });
  const [progress, setProgress] = useState(0);
  const [rightAnwsers, setRightAnswers] = useState(0);
  const tasks = [
    {
      taskName: "Задание 1",
      taskQuestions: {
        question:
          "Калькулятор какой операционной системы изображен на второй странцие?",
        answers: ["iOS", "Android", "Windows", "MS-DOS"],
      },
    },
    {
      taskName: "Задание 2",
      taskQuestions: {
        question: "Как были получены картинки для слайдера?",
        answers: [
          "С помощью Яндекс.Картинки",
          "С помощью нейросети Кандински",
          "Нарисовал сам",
          "Их нарисовал Билл Гейтс",
        ],
      },
    },
    {
      taskName: "Задание 3",
      taskQuestions: {
        question: "Какую теслу надо брать?",
        answers: ["Model 3", "Model S", "Model Y", "Model X", "Любую"],
      },
    },
  ];
  const cheatAnswers = {
    "Калькулятор какой операционной системы изображен на второй странцие?":
      "iOS",
    "Как были получены картинки для слайдера?": "С помощью нейросети Кандински",
    "Какую теслу надо брать?": "Любую",
  };

  const [choosedAnswers, setChoosedAnswers] = useState({});

  const checkAnswers = (cheatAnswers, choosedAnswers) => {
    let counter = 0;
    for (let answer of Object.keys(cheatAnswers)) {
      if (choosedAnswers[answer] === cheatAnswers[answer]) {
        counter++;
      }
    }
    setRightAnswers(counter);
  };

  return (
    <div className="testModalLayout">
      <MyModal
        visible={visible}
        setVisible={setVisible}
        children={
          <Questions
            questions={questions}
            choosedAnswers={choosedAnswers}
            cheatAnswers={cheatAnswers}
            setChoosedAnswers={setChoosedAnswers}
            setProgress={setProgress}
            checkAnswers={checkAnswers}
          />
        }
      />
      <ul className="tasks">
        {tasks.map((item) => (
          <li
            className="task"
            onClick={() => {
              setVisible(true);
              setQuestions(item.taskQuestions);
            }}
            key={item.taskName}
          >
            {item.taskName}
          </li>
        ))}
      </ul>
      <p className="progress">
        {progress}/{tasks.length} (правильных ответов: {rightAnwsers})
      </p>
    </div>
  );
};

export default TestModal;
