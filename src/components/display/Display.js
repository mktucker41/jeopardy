import React from "react";
function Display(props) {
  return (
    <div>
      <div>
        <h3>Score: {props.score}</h3>
      </div>
      <div>
        <h3>Category: {props.data.category.title}</h3>
        <h3>$$$: {props.data.value}</h3>
        <h3>Question: {props.data.question}</h3>
        <h3>
          <input
            type="text"
            value={props.answerGuess}
            onChange={props.handleChange}
          />
        </h3>
        <button onClick={props.makeGuess}>Submit Answer</button>
      </div>
    </div>
  );
}
export default Display;
