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