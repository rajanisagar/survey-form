import React, { useContext, useEffect, useState } from "react";
import ContextApp from "../contextApp";

import "./button-group.css";

const ButtonGroup = (props) => {
  const { questions, setQuestions } = useContext(ContextApp);

  const { buttons, q } = props;

  const [clickedId, setClickedId] = useState(-1);
  const handleClick = (event, id) => {
    setClickedId(id);

    questions[q] = id;
  };

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          onClick={(event) => handleClick(event, i)}
          className={
            i === clickedId || (questions[q] !== -1 && i == questions[q])
              ? "customButton active"
              : "customButton"
          }
          name={buttonLabel}
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;

