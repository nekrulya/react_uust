import React, { useState } from "react";
import CalcBtn from "../components/UI/CalcBtn/CalcBtn";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const calculate = (expression) => {
    try {
      // eslint-disable-next-line no-eval
      const newValue = eval(expression);
      setExpression(newValue);
    } catch (e) {
      setExpression("ERROR");
    }
  };

  return (
    <div className="calculator">
      <div className="calculator__output">
        <input
          type="text"
          value={expression}
          onChange={(event) => setExpression(event.target.value)}
          onKeyDown={(event) => {
            console.log(event);
            if (event.key === "Enter") {
              calculate(expression);
            }
          }}
        />
      </div>
      <div className="calculator__btns">
        <div className="btns_row">
          <CalcBtn
            value={"AC"}
            style={{ backgroundColor: "#A5A5A5", color: "#000" }}
            onClick={(event) => {
              setExpression("");
            }}
          />
          <CalcBtn
            value={"+/-"}
            style={{ backgroundColor: "#A5A5A5", color: "#000" }}
            onClick={(event) => {
              setExpression(Number(expression) * -1);
            }}
          />
          <CalcBtn
            value={"%"}
            style={{ backgroundColor: "#A5A5A5", color: "#000" }}
            onClick={(event) => {
              try {
                // eslint-disable-next-line no-eval
                setExpression(eval(expression / 100));
              } catch (e) {
                setExpression("ERROR");
              }
            }}
          />
          <CalcBtn
            value={"/"}
            style={{ backgroundColor: "#F1A33B" }}
            onClick={(event) => {
              setExpression(expression + "/");
            }}
          />
        </div>
        <div className="btns_row">
          <CalcBtn
            value={"7"}
            onClick={(event) => {
              setExpression(expression + "7");
            }}
          />
          <CalcBtn
            value={"8"}
            onClick={(event) => {
              setExpression(expression + "8");
            }}
          />
          <CalcBtn
            value={"9"}
            onClick={(event) => {
              setExpression(expression + "9");
            }}
          />
          <CalcBtn
            value={"*"}
            style={{ backgroundColor: "#F1A33B" }}
            onClick={(event) => {
              setExpression(expression + "*");
            }}
          />
        </div>
        <div className="btns_row">
          <CalcBtn
            value={"4"}
            onClick={(event) => {
              setExpression(expression + "4");
            }}
          />
          <CalcBtn
            value={"5"}
            onClick={(event) => {
              setExpression(expression + "5");
            }}
          />
          <CalcBtn
            value={"6"}
            onClick={(event) => {
              setExpression(expression + "6");
            }}
          />
          <CalcBtn
            value={"-"}
            style={{ backgroundColor: "#F1A33B" }}
            onClick={(event) => {
              setExpression(expression + "-");
            }}
          />
        </div>
        <div className="btns_row">
          <CalcBtn
            value={"1"}
            onClick={(event) => {
              setExpression(expression + "1");
            }}
          />
          <CalcBtn
            value={"2"}
            onClick={(event) => {
              setExpression(expression + "2");
            }}
          />
          <CalcBtn
            value={"3"}
            onClick={(event) => {
              setExpression(expression + "3");
            }}
          />
          <CalcBtn
            value={"+"}
            style={{ backgroundColor: "#F1A33B" }}
            onClick={(event) => {
              setExpression(expression + "+");
            }}
          />
        </div>
        <div className="btns_row">
          <CalcBtn
            value={"0"}
            style={{ width: 155, borderRadius: 300 }}
            onClick={(event) => {
              setExpression(expression + "0");
            }}
          />
          <CalcBtn
            value={"."}
            onClick={(event) => {
              setExpression(expression + ".");
            }}
          />
          <CalcBtn
            value={"="}
            style={{ backgroundColor: "#F1A33B" }}
            onClick={(event) => {
              calculate(expression);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
