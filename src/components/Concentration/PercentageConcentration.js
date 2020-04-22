import React, { useState, useEffect, useMemo } from "react";
import { amountToFixed, percentageConcentration } from "../../helper";

import ControlItem from "../ControlItem";
import ResultItem from "../ResultItem";

function PercentageConcentration() {
  const [concStart, setConcStart] = useState("");
  const [amount, setAmount] = useState("");
  const [concFinish, setConcFinish] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const correctData = useMemo(() => {
    return amount !== "" && concStart !== "" && concFinish !== ""
      ? true
      : false;
  }, [amount, concStart, concFinish]);

  useEffect(() => {
    setResult("");
    setError("");
    correctData ? setDisabledButton(false) : setDisabledButton(true);
  }, [correctData]);

  const concentrationHandler = () => {
    const value = percentageConcentration(concStart, concFinish, amount);
    isFinite(value)
      ? setResult(`${amountToFixed(value)}`)
      : setError("Niepoprawne dane");
  };

  return (
    <section className="section__box percentage_concentration">
      <section className="section__content">
        <h4 className="section__subtitle">Procentowe</h4>
        <ControlItem
          label="Stężenie początkowe"
          value={concStart}
          setValue={setConcStart}
          unitValue="%"
        />
        <ControlItem
          label="Ilość roztworu jaką chcemy otrzymać"
          value={amount}
          setValue={setAmount}
          unitValue="ml"
        />
        <ControlItem
          label="Stężenie jakie chcemy otrzymać"
          unitValue="%"
          value={concFinish}
          setValue={setConcFinish}
        />
        <div className="section__button">
          <button onClick={concentrationHandler} disabled={disabledButton}>
            <i className="fas fa-check"></i>
          </button>
        </div>
      </section>
      {result.length !== 0 ? (
        <section className="section__result">
          <ResultItem name="Ilość substancji" result={result} unit="ml" />
          <ResultItem
            name="Ilość rozpuszczalnika"
            result={`${amountToFixed(parseFloat(amount) - parseFloat(result))}`}
            unit="ml"
          />
        </section>
      ) : null}
      {error.length !== 0 ? <p className="section__error">{error}</p> : null}
    </section>
  );
}

export default PercentageConcentration;
