import React, { useState } from "react";
import CalcBtn from "../components/UI/CalcBtn/CalcBtn";

const Calculator = () => {
  const [expression, setExpression] = useState("");

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
              setExpression(eval(expression));
            }
          }}
        />
      </div>
      <div className="calculator__btns">
        <div className="btns_row">
          <CalcBtn
            value={"AC"}
            onClick={(event) => {
              setExpression("");
            }}
          />
          <CalcBtn
            value={"+/-"}
            onClick={(event) => {
              setExpression(Number(expression) * -1);
            }}
          />
          <CalcBtn
            value={"%"}
            onClick={(event) => {
              setExpression(eval(expression / 100));
            }}
          />
          <CalcBtn
            value={"/"}
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
            onClick={(event) => {
              setExpression(eval(expression));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
