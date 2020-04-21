import React, { useState, useEffect, useMemo } from "react";
import classNames from "classnames";

import RadioButton from "../RadioButton";
import ControlItem from "../ControlItem";
import ResultItem from "../ResultItem";

import { amountToFixed, concentrationConversion } from "../../helper";

const OPTIONS = [
  { value: "mol/dm3", name: "molowe" },
  { value: "%", name: "procentowe" },
];

function ConcentrationConversion() {
  const [unit, setUnit] = useState("%");
  const [concentration, setConcentration] = useState("");
  const [molarMass, setMolarMass] = useState("");
  const [density, setDensity] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const correctData = useMemo(() => {
    return concentration !== "" && molarMass !== "" && density !== ""
      ? true
      : false;
  }, [concentration, molarMass, density]);

  useEffect(() => {
    setResult("");
    setError("");
    correctData ? setDisabledButton(false) : setDisabledButton(true);
  }, [unit, correctData]);

  const conversionHandler = () => {
    const value = concentrationConversion(
      concentration,
      density,
      molarMass,
      unit === "%"
    );

    isFinite(value)
      ? setResult(`${amountToFixed(value)}`)
      : setError("Niepoprawne dane");
  };

  return (
    <section
      className={classNames({
        section__box: true,
        concentration_conversion: true,
        "concentration_conversion--molar": unit === "mol/dm3",
      })}
    >
      <section className="section__content">
        <h4 className="section__subtitle">Stężenie</h4>
        <RadioButton value={unit} setValue={setUnit} options={OPTIONS} />
        <ControlItem
          label=""
          value={concentration}
          setValue={setConcentration}
          unitValue={unit}
        />
        <ControlItem
          label="Masa molowa"
          value={molarMass}
          setValue={setMolarMass}
          unitValue="g/mol"
        />
        <ControlItem
          label="Gęstość"
          value={density}
          setValue={setDensity}
          sup={true}
          unitValue="g/cm"
        />
        <div className="section__button">
          <button onClick={conversionHandler} disabled={disabledButton}>
            <i className="fas fa-check"></i>
          </button>
        </div>
      </section>
      {result.length !== 0 ? (
        <section className="section__result">
          {unit === "%" ? (
            <ResultItem
              name="Stężenie molowe"
              result={result}
              unit="mol/dm"
              sup={true}
            />
          ) : (
            <ResultItem name="Stężenie procentowe" result={result} unit="%" />
          )}
        </section>
      ) : null}
      {error.length !== 0 ? <p className="section__error">{error}</p> : null}
    </section>
  );
}

export default ConcentrationConversion;
