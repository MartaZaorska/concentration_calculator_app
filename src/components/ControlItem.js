import React from "react";
import { prepareNumber } from "../helper";

function ControlItem({
  label,
  value,
  setValue,
  unitValue,
  setUnitValue = undefined,
  unitList = [],
  sup = false,
}) {
  return (
    <div className="section__control">
      {label === "" ? null : <label>{label}</label>}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(prepareNumber(e.target.value))}
        placeholder="0.0"
      />
      {setUnitValue ? (
        <select
          value={unitValue}
          onChange={(e) => setUnitValue(e.target.value)}
        >
          {unitList.map((unitItem, index) => (
            <option value={unitItem} key={`${unitItem}_${index}`}>
              {unitItem}
            </option>
          ))}
        </select>
      ) : unitValue !== "" ? (
        <span className="unit">
          [{unitValue}
          {sup ? <sup>3</sup> : null}]
        </span>
      ) : null}
    </div>
  );
}

export default React.memo(ControlItem);
