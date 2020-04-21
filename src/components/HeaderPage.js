import React from "react";
import { Link } from "react-router-dom";

function HeaderPage({ title }) {
  return (
    <h2 className="section__title">
      <Link to="/">{title}</Link>
    </h2>
  );
}

export default HeaderPage;
