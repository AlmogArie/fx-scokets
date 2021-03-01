import React from "react";

function Button(props) {
  const { onChangeInterval } = props;
  // btnData is an array for creating the time stamps buttons, it contains desplay and the two parameters which will be passed
  // ownards for the onChangePeriod funciton
  const btnsData = [
    { txt: "1 Minute", newInterval: 60000, id: 1 },
    { txt: "5 Minute", newInterval: 300000, id: 2 },
    { txt: "1 Hour", newInterval: 3600000, id: 3 },
    // I gave the value of 604800000 (millisecond), because I saw on stack overflow that the max number on setInterval function can be 2**31-1ms and the value that i gave is lower then the max.
    { txt: "1 Week", newInterval: 604800000, id: 4 },
  ];

  return (
    <div className="btns flex space-around">
      {btnsData.map((btn) => {
        return (
          <button
            key={btn.id}
            className="period-btn"
            onClick={() => onChangeInterval(btn.newInterval)}
          >
            {btn.txt}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
