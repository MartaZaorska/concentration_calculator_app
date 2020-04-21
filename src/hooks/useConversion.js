import { useState, useEffect } from "react";
import { prepareNumber, amountToFixed } from "../helper";

const useConversion = (unitList) => {
  const [amountOne, setAmountOne] = useState("1");
  const [unitOne, setUnitOne] = useState(Object.keys(unitList)[0]);
  const [amountTwo, setAmountTwo] = useState("1000");
  const [unitTwo, setUnitTwo] = useState(Object.keys(unitList)[1]);

  useEffect(() => {
    const valueOne = parseFloat(amountOne) || 0;
    let valueTwo =
      (valueOne * unitList[unitOne].value) / unitList[unitTwo].value;
    setAmountTwo(`${amountToFixed(valueTwo)}`);
  }, [amountOne, unitOne, unitTwo, unitList]);

  const changeAmount = (e) => setAmountOne(prepareNumber(e.target.value));

  return [
    amountOne,
    changeAmount,
    unitOne,
    setUnitOne,
    unitTwo,
    setUnitTwo,
    amountTwo,
  ];
};

export default useConversion;
