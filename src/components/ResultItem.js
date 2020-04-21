import React from "react";

function ResultItem({ name, result, unit, sup = false }) {
  return (
    <p className="section__text">
      <span className="name">{name}</span>
      <span className="result"> {result} </span>
      <span className="unit">
        [{unit}
        {sup ? <sup>3</sup> : null}]
      </span>
    </p>
  );
}

export default React.memo(ResultItem);
