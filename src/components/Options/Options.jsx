import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Loans",
      handler: props.actionProvider.handleLoanProcess,
      id: 1,
    },
    { text: "Attendance",
     handler: props.actionProvider.handleAttendance,
      id: 2
     },
    { text: "Leave",
     handler: props.actionProvider.handleLeave,
      id: 3
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;