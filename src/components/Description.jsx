import React from "react";

function Description() {
  return (
    <>
      <div className="description-section">
        <h4>The factorial of n is given by: n! = n*(n-1)!</h4>
        <p>Example: 4! = 4*3!</p>
        <p>Example: 3! = 3*2!</p>
        <p>Example: 2! = 2*1!</p>
        <p>Example: 1! = 1</p>
        <h4>Finally, 4! = 4*3*2*1 = 24</h4>
        <br />
        <h3>Important note:</h3>
        <h4>In this project the consistent Input range is 0-170</h4>
        <h4>For input &gt; 170 it shows infinity</h4>
      
      </div>
    </>
  );
}

export default Description;
