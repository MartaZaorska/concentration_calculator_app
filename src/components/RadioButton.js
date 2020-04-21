import React from "react";
import classNames from "classnames";

function RadioButton({ label = "", value, setValue, options }) {
  const clickHandler = () => {
    value === options[0].value
      ? setValue(options[1].value)
      : setValue(options[0].value);
  };

  return (
    <div className="section__control">
      {label === "" ? null : <label>{label}</label>}
      <button
        className={classNames({
          radio__button: true,
          "radio__button--right": value === options[1].value,
        })}
        onClick={clickHandler}
      >
        <span className="label">{options[0].name}</span>
        <span className="spin">
          <span className="stripe"></span>
          <span className="dot"></span>
        </span>
        <span className="label">{options[1].name}</span>
      </button>
    </div>
  );
}

export default React.memo(RadioButton);
