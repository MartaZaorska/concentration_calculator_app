import React from "react";

import { VOLUME_UNITS } from "../../constants";
import ConversionContent from "./ConversionContent";

function VolumeConversion() {
  return (
    <section className="section__box volume_conversion">
      <h4 className="section__subtitle">Jednostki objętości</h4>
      <ConversionContent unitList={VOLUME_UNITS} />
    </section>
  );
}

export default VolumeConversion;
