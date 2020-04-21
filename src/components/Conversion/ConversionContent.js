import React from "react";

import useConversion from "../../hooks/useConversion";
import SelectList from "./SelectList";

function ConversionContent({ unitList }) {
  const [
    amountOne,
    setAmountOne,
    unitOne,
    setUnitOne,
    unitTwo,
    setUnitTwo,
    amountTwo,
  ] = useConversion(unitList);

  return (
    <section className="section__content">
      <div className="section__control">
        <input
          type="text"
          value={amountOne}
          onChange={setAmountOne}
          placeholder="0.0"
        />
        <SelectList data={unitList} value={unitOne} setValue={setUnitOne} />
      </div>
      <div className="conversion__icon">
        <i className="fas fa-sync-alt"></i>
      </div>
      <div className="section__control">
        <input
          type="text"
          value={amountTwo}
          disabled
          className="input--disabled"
        />
        <SelectList data={unitList} value={unitTwo} setValue={setUnitTwo} />
      </div>
    </section>
  );
}

export default React.memo(ConversionContent);
