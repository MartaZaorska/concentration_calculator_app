import React, { useState, useEffect, useMemo } from "react";
import { amountToFixed, molarDose } from "../../helper";

import RadioButton from "../RadioButton";
import ControlItem from "../ControlItem";
import ResultItem from "../ResultItem";

const OPTIONS = [
  { value: "liquid", name: "ciecz" },
  { value: "solid", name: "ciało stałe" },
];

function MolarDose() {
  const [physicalState, setPhysicalState] = useState("liquid");
  const [molarMass, setMolarMass] = useState("");
  const [dose, setDose] = useState("");
  const [weight, setWeight] = useState("");
  const [density, setDensity] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const correctData = useMemo(() => {
    if (physicalState === "liquid" && density === "") return false;
    return molarMass !== "" && dose !== "" && weight !== "" ? true : false;
  }, [molarMass, dose, weight, physicalState, density]);

  useEffect(() => {
    setResult("");
    setError("");
    correctData ? setDisabledButton(false) : setDisabledButton(true);
  }, [correctData]);

  const doseHandler = () => {
    const value = molarDose(molarMass, dose, weight, physicalState, density);
    isFinite(value)
      ? setResult(`${amountToFixed(value)}`)
      : setError("Niepoprawne dane");
  };

  return (
    <section className="section__box molar_dose">
      <section className="section__content">
        <h4 className="section__subtitle">W stężeniu molowym</h4>
        <RadioButton
          value={physicalState}
          setValue={setPhysicalState}
          options={OPTIONS}
          label="Postać leku"
        />
        <ControlItem
          label="Masa molowa leku"
          value={molarMass}
          setValue={setMolarMass}
          unitValue="g/mol"
        />
        <ControlItem
          label="Dawka"
          value={dose}
          setValue={setDose}
          unitValue="mmol/1 kg masy ciała"
        />
        <ControlItem
          label="Waga badanego obiektu"
          value={weight}
          setValue={setWeight}
          unitValue="g"
        />
        {physicalState === "liquid" ? (
          <ControlItem
            label="Gęstość leku"
            value={density}
            setValue={setDensity}
            unitValue="g/cm"
            sup={true}
          />
        ) : null}
        <div className="section__button">
          <button onClick={doseHandler} disabled={disabledButton}>
            <i className="fas fa-check"></i>
          </button>
        </div>
      </section>
      {result.length !== 0 ? (
        <section className="section__result">
          {physicalState === "liquid" ? (
            <ResultItem
              name="Ilość leku jaką należy pobrać dla jedengo obiektu"
              result={result}
              unit="ml"
            />
          ) : (
            <ResultItem
              name="Masa leku jaką należy pobrać dla jednego obiektu"
              result={result}
              unit="mg"
            />
          )}
        </section>
      ) : null}
      {error.length !== 0 ? <p className="section__error">{error}</p> : null}
    </section>
  );
}

export default MolarDose;
