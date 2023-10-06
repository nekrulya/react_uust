import React from "react";

const About = () => {
  return (
    <div className="aboutLayout">
      <img className="avatar" src="me.jpg" alt="avatar" />
      <div className="aboutDescr">
        <span>Name: Илья Некрасов</span>
        <span>Age: 22</span>
        <span>Uni: UUST (2019 - 2023)</span>
        <span>Skills: JS, React, Vue 3, Python, Flask, Fast API</span>
        <span>Hobby: gym, AI, PC games</span>
        <span
          style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        >
          Social:
          <a href="https://vk.com/nekrulyaa" target="blank">
            <img src="vk-logo.png" alt="vk-logo" className="social-logo" />
          </a>
          <a href="https://t.me/Nekrulya" target="blank">
            <img
              src="telegram-logo.png"
              alt="telegram-logo"
              className="social-logo"
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default About;
