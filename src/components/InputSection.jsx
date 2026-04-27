import React, { useState } from "react";
import AnswerSection from "./AnswerSection";
import DetailedAnswer from "./DetailedAnswer";
import Description from "./Description";

function InputSection() {
  const [inputVal, setInputVal] = useState("");
  const [visibility, setVisibility] = useState(false);

  const inputField = document.getElementById("num-input");
  const handleInput = (e) => {
    // console.log(inputField);
    setInputVal(e.target.value);
    // setVisibility(false);
  };
  return (
    <>
      <div className="input-section">
        <input
          type="number"
          value={inputVal}
          onChange={handleInput}
          placeholder="Input number..."
          id="num-input"
        />
        {/* <button onClick={handleInput}>Caculate</button> */}
      </div>
      {inputVal == "" ? <Description/>: (
        <AnswerSection
          num={inputVal}
          visibility={visibility}
          setVisibility={setVisibility}
        />
      )}
      {/* {inputVal != "" && <DetailedAnswer num={inputVal} />} */}
    </>
  );
}

export default InputSection;
