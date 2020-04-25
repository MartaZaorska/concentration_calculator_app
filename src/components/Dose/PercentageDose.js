import React, { useState, useEffect, useMemo } from "react";
import classNames from "classnames";
import { amountToFixed, percentageDose } from "../../helper";

import RadioButton from "../RadioButton";
import ControlItem from "../ControlItem";
import ResultItem from "../ResultItem";

const OPTIONS = [
  { value: "liquid", name: "ciecz" },
  { value: "solid", name: "ciało stałe" },
];

function PercentageDose() {
  const [physicalState, setPhysicalState] = useState("liquid");
  const [activeSubstance, setActiveSubstance] = useState("");
  const [solventSubstance, setSolventSubstance] = useState("");
  const [dose, setDose] = useState("");
  const [weight, setWeight] = useState("");
  const [numObject, setNumObject] = useState("");
  const [amountSolution, setAmountSolution] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const correctData = useMemo(() => {
    return activeSubstance !== "" &&
      solventSubstance !== "" &&
      dose !== "" &&
      weight !== "" &&
      numObject !== "" &&
      amountSolution !== ""
      ? true
      : false;
  }, [
    activeSubstance,
    solventSubstance,
    dose,
    weight,
    numObject,
    amountSolution,
  ]);

  useEffect(() => {
    setResult("");
    setError("");
    if (physicalState === "liquid") setSolventSubstance("1");
    correctData ? setDisabledButton(false) : setDisabledButton(true);
  }, [physicalState, correctData]);

  const doseHandler = () => {
    const value = percentageDose(
      activeSubstance,
      solventSubstance,
      dose,
      weight,
      numObject,
      amountSolution
    );
    isFinite(value)
      ? setResult(`${amountToFixed(value)}`)
      : setError("Niepoprawne dane");
  };

  return (
    <section
      className={classNames({
        section__box: true,
        percentage_dose: true,
        "percentage_dose--liquid": physicalState === "liquid",
        "percentage_dose--solid": physicalState === "solid",
      })}
    >
      <section className="section__content">
        <h4 className="section__subtitle">Dawka - lek</h4>
        <RadioButton
          value={physicalState}
          setValue={setPhysicalState}
          options={OPTIONS}
          label="Postać leku"
        />
        <ControlItem
          label="Ilość substancji czynnej (A)"
          value={activeSubstance}
          setValue={setActiveSubstance}
          unitValue={physicalState === "liquid" ? "mg / ml" : "mg"}
        />
        {physicalState === "solid" ? (
          <ControlItem
            label="Objętość rozpuszczalnika (A)"
            value={solventSubstance}
            setValue={setSolventSubstance}
            unitValue="ml"
          />
        ) : null}
        <ControlItem
          label="Dawka"
          value={dose}
          setValue={setDose}
          unitValue="mg / kg masy ciała"
        />
        <ControlItem
          label="Waga badanego obiektu"
          value={weight}
          setValue={setWeight}
          unitValue="g"
        />
        <ControlItem
          label="Liczba badanych obiektów"
          value={numObject}
          setValue={setNumObject}
          unitValue=""
        />
        <ControlItem
          label="Objętość pojedyńczej dawki"
          value={amountSolution}
          setValue={setAmountSolution}
          unitValue="ml"
        />
        <div className="section__button">
          <button onClick={doseHandler} disabled={disabledButton}>
            <i className="fas fa-check"></i>
          </button>
        </div>
      </section>
      {result.length !== 0 ? (
        <section className="section__result">
          <ResultItem
            name={`Objętość roztworu (A) jaką należy pobrać dla ${numObject} obiektów`}
            result={result}
            unit="ml"
          />
          <ResultItem
            name="Objętość rozpuszczalnika (B) jaką należy użyć do rozcieńczenia pobranego roztworu (A)"
            result={`${amountToFixed(
              parseFloat(numObject * amountSolution) - parseFloat(result)
            )}`}
            unit="ml"
          />
        </section>
      ) : null}
      {error.length !== 0 ? <p className="section__error">{error}</p> : null}
    </section>
  );
}

export default PercentageDose;
