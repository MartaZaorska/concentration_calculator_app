import React from "react";

import { MASS_UNITS } from "../../constants";
import ConversionContent from "./ConversionContent";

function MassConversion() {
  return (
    <section className="section__box mass_conversion">
      <h4 className="section__subtitle">Jednostki masy</h4>
      <ConversionContent unitList={MASS_UNITS} />
    </section>
  );
}

export default MassConversion;
