import React, { useState } from "react";
import MyModal from "../components/UI/MyModal/MyModal";
import Questions from "../components/Questions";

const TestModal = () => {
  const [visible, setVisible] = useState(false);
  const [questions, setQuestions] = useState({
    question: null,
    answers: [1, 2, 3],
  });
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

  const [choosedAnswers, setChoosedAnswers] = useState({});

  return (
    <div className="testModalLayout">
      <MyModal
        visible={visible}
        setVisible={setVisible}
        children={
          <Questions
            questions={questions}
            choosedAnswers={choosedAnswers}
            setChoosedAnswers={setChoosedAnswers}
          />
        }
      />
      <ul>
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
    </div>
  );
};

export default TestModal;
