import React from "react";
import { prepareNumber } from "../../helper";

function DoseInput({ value, setValue }) {
  return (
    <div className="section__control dose__input">
      <label>Ilość substancji czynnej</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(prepareNumber(e.target.value))}
        placeholder="0.0"
      />
      <span className="unit">[mg]</span>
      <span className="text"> w 1 </span>
      <span className="unit">[ml]</span>
    </div>
  );
}

export default React.memo(DoseInput);
