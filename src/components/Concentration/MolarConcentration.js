import React, { useState, useEffect, useMemo } from "react";

import RadioButton from "../RadioButton";
import ControlItem from "../ControlItem";
import ResultItem from "../ResultItem";

import { amountToFixed, molarConcentration } from "../../helper";

const OPTIONS = [
  { name: "ciało stałe", value: "solid" },
  { name: "ciecz", value: "liquid" },
];

function MolarConcentration() {
  const [physicalState, setPhysicalState] = useState("solid");
  const [conc, setConc] = useState("");
  const [concUnit, setConcUnit] = useState("mM");
  const [amount, setAmount] = useState("");
  const [molarMass, setMolarMass] = useState("");
  const [concPercentage, setConcPercentage] = useState("");
  const [density, setDensity] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const correctData = useMemo(() => {
    if (physicalState === "liquid" && (concPercentage === "" || density === ""))
      return false;
    return conc !== "" && amount !== "" && molarMass !== "" ? true : false;
  }, [conc, amount, molarMass, concPercentage, density, physicalState]);

  useEffect(() => {
    setResult("");
    setError("");
    correctData ? setDisabledButton(false) : setDisabledButton(true);
  }, [correctData]);

  const concentrationHandler = () => {
    const value = molarConcentration(
      conc,
      concUnit,
      amount,
      molarMass,
      physicalState,
      concPercentage,
      density
    );
    isFinite(value)
      ? setResult(`${amountToFixed(value)}`)
      : setError("Niepoprawne dane");
  };

  return (
    <section className="section__box molar_concentration">
      <section className="section__content">
        <h4 className="section__subtitle">Molowe</h4>
        <RadioButton
          value={physicalState}
          setValue={setPhysicalState}
          options={OPTIONS}
        />
        <ControlItem
          label="Masa molowa roztworu"
          value={molarMass}
          setValue={setMolarMass}
          unitValue="g/mol"
        />
        {physicalState === "liquid" ? (
          <>
            <ControlItem
              label="Stężenie procentowe roztworu"
              value={concPercentage}
              setValue={setConcPercentage}
              unitValue="%"
            />
            <ControlItem
              label="Gęstość roztworu"
              value={density}
              setValue={setDensity}
              unitValue="g/cm"
              sup={true}
            />
          </>
        ) : null}
        <ControlItem
          label="Ilość jaką chcemy otrzymać"
          value={amount}
          setValue={setAmount}
          unitValue="ml"
        />
        <ControlItem
          label="Stężenie molowe jakie chcemy otrzymać"
          value={conc}
          setValue={setConc}
          unitValue={concUnit}
          setUnitValue={setConcUnit}
          unitList={["mM", "M"]}
        />
        <div className="section__button">
          <button onClick={concentrationHandler} disabled={disabledButton}>
            <i className="fas fa-check"></i>
          </button>
        </div>
      </section>
      {result.length !== 0 ? (
        <section className="section__result">
          {physicalState === "solid" ? (
            <ResultItem unit="mg" name="Ilość substancji" result={result} />
          ) : (
            <ResultItem unit="ml" name="Ilość substancji" result={result} />
          )}
          <ResultItem
            result={
              physicalState === "solid"
                ? amount
                : `${amountToFixed(parseFloat(amount) - parseFloat(result))}`
            }
            name="Ilość rozpuszczalnika"
            unit="ml"
          />
        </section>
      ) : null}
      {error.length !== 0 ? <p className="section__error">{error}</p> : null}
    </section>
  );
}

export default MolarConcentration;
