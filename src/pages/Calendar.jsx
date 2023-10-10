import React, { useState } from "react";

const Calendar = () => {
  const colors = ["зеленый", "красный", "желтый", "белый", "черный"];
  const animals = [
    "крысы",
    "коровы",
    "тигра",
    "зайца",
    "дракона",
    "змеи",
    "лошади",
    "овцы",
    "обезьяны",
    "курицы",
    "собаки",
    "свиньи",
  ];
  const startYear = 4;

  const [japanYear, setJapanYear] = useState("");

  const getColorAndAnimal = (year) => {
    if (
      colors[Math.floor(((year - startYear) % 60) / 12)] &&
      animals[((year - startYear) % 60) % 12]
    ) {
      setJapanYear(
        colors[Math.floor(((year - startYear) % 60) / 12)] +
          " " +
          animals[((year - startYear) % 60) % 12]
      );
    }
  };

  return (
    <div className="calendarLayout">
      <input
        className="calendarInput"
        type="text"
        onChange={(e) => getColorAndAnimal(e.target.value)}
        placeholder="Введите год от 4 года н.э."
      />
      <p>{japanYear}</p>
      <img src={japanYear + ".jpg"} alt="" className="calendarImg" />
    </div>
  );
};

export default Calendar;
