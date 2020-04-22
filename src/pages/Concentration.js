import React from "react";
import useAnimationSection from "../hooks/useAnimationSection";

import {
  PercentageConcentration,
  MolarConcentration,
} from "../components/Concentration/index";

import HeaderPage from "../components/HeaderPage";

function Concentration() {
  useAnimationSection("concentration");
  return (
    <section className="concentration">
      <HeaderPage title="Stężenie" />
      <section className="section__wrapper">
        <PercentageConcentration />
        <MolarConcentration />
      </section>
    </section>
  );
}

export default Concentration;
