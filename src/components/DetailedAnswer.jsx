import React, { useEffect, useState } from "react";

function DetailedAnswer({ num }) {
  const [details, setDetails] = useState([]);
  const generateDetails = () => {
    let i = 1;
    let currentVal = num;
    setDetails([]);
    let rawResult = [];
    for (let i = 1; i < num; i++) {
      setDetails([]);
      const intermediateResult = currentVal * (num - i);
      const textLine = `${i}. ${currentVal} * ${num - i} = ${intermediateResult}`;

      currentVal = intermediateResult;
      rawResult.push(textLine);
      console.log("i..::::", i, textLine);
    }
    setDetails(rawResult);
    console.log("Details:...", details);
  };
  useEffect(() => {
    generateDetails();
  }, [num]);

  if (num < 0) {
    return (
      <>
        <div className="detailed-answer">
          <div className="single-line">
            <h3>Please Enter a Valid number</h3>
          </div>
        </div>
      </>
    );
  }
  if (num == 0 || num == 1) {
    return (
      <>
        <div className="detailed-answer">
          <div className="single-line">
            <h3>The factorial of {num} is 1</h3>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="detailed-answer">
        {/* <h1>Hello</h1> */}
        {details != [] ? (
          details.map((element, i) => {
            return (
              <>
                <div key={i} className="single-line">
                  <h3>{element}</h3>
                </div>
              </>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default DetailedAnswer;
