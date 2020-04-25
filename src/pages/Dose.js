import React from "react";

import useAnimationSection from "../hooks/useAnimationSection";

import { PercentageDose, MolarDose } from "../components/Dose/index";
import HeaderPage from "../components/HeaderPage";

function Dose() {
  useAnimationSection("dose");
  return (
    <section className="dose">
      <HeaderPage title="Dawki" />
      <section className="section__wrapper">
        <PercentageDose />
        <MolarDose />
      </section>
    </section>
  );
}

export default Dose;
