import React from "react";
import useAnimationSection from "../hooks/useAnimationSection";

import {
  MassConversion,
  VolumeConversion,
  ConcentrationConversion,
} from "../components/Conversion/index";

import HeaderPage from "../components/HeaderPage";

function Conversion() {
  useAnimationSection("conversion");
  return (
    <section className="conversion">
      <HeaderPage title="Konwersja" />
      <section className="section__wrapper">
        <MassConversion />
        <VolumeConversion />
        <ConcentrationConversion />
      </section>
    </section>
  );
}

export default Conversion;
