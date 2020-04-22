export const prepareNumber = (value) => {
  const tmp = value.replace(",", ".");
  return checkNumber(tmp) ? tmp : "";
};

export const checkNumber = (value) => {
  return /^\d*\.?\d*$/.test(value);
};

export const amountToFixed = (value) => {
  const tab = `${value}`.split(".");
  return tab.length <= 1
    ? value
    : tab[1].length > 4
    ? parseFloat(value.toFixed(4))
    : value;
};

export const concentrationConversion = (
  conc,
  density,
  molarMass,
  percentageToMolar = false
) => {
  const updatedDensity = density * 1000;
  return percentageToMolar
    ? (conc * updatedDensity) / (100 * molarMass)
    : (conc * 100 * molarMass) / updatedDensity;
};

export const percentageConcentration = (concStart, concFinish, amount) => {
  return ((concFinish * amount) / 100) * (100 / concStart);
};

export const molarConcentration = (
  conc,
  concUnit,
  amount,
  molarMass,
  physicalState,
  concPercentage,
  density
) => {
  let value = amount * 0.001 * conc * molarMass;
  if (physicalState === "liquid") {
    value =
      concUnit === "mM"
        ? (((value * 100) / concPercentage) * 0.001) / density
        : (value * 100) / concPercentage / density;
  } else {
    value = concUnit === "mM" ? value : value * 1000;
  }
  return value;
};
