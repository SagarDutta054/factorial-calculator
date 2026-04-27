import React, { useEffect, useState } from "react";
import DetailedAnswer from "./DetailedAnswer";

function AnswerSection({ num, setVisibility, visibility }) {
  const [ans, setAnswer] = useState(1);
  // const [visibility, setVisibility] = useState(false);
  const manageVisibility = () => {
    setVisibility(!visibility);
  };
  const calculateFactorial = () => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    setAnswer(result);
  };
  useEffect(() => {
    calculateFactorial();
  }, [num]);
  return (
    <>
      <div className="answer-section">
        {num >= 0 ? (
          <div className="left">
            <h2>
              {num}
              <span> ! =</span> {ans}
            </h2>
          </div>
        ) : (
          <div className="left">
            <h2>Invalid input !</h2>
          </div>
        )}
        <div className="right">
          <button onClick={manageVisibility}>
            {visibility ? "Close" : "Details"}
          </button>
        </div>
      </div>
      {visibility && <DetailedAnswer num={num} />}
      {/* <DetailedAnswer num={num} /> */}
    </>
  );
}

export default AnswerSection;
