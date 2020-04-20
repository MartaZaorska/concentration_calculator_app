import React from "react";
import { Link } from "react-router-dom";

import useAnimationSection from "../hooks/useAnimationSection";

function Home() {
  useAnimationSection("home");
  return (
    <section className="home">
      <header className="header">
        <h1 className="section__title">Kalkulator stężeń</h1>
      </header>
      <section className="home__list">
        <Link to="/conversion" className="home__link">
          <i className="fas fa-calculator"></i>
          <section className="home__content">
            <h3 className="home__subtitle">Konwersja</h3>
            <p className="home__text">
              Zamień jednostki masy, objętości oraz stężenia molowego
              i&nbsp;procentowego.
            </p>
          </section>
        </Link>
        <Link to="/concentration" className="home__link">
          <i className="fas fa-percentage"></i>
          <section className="home__content">
            <h3 className="home__subtitle">Stężenie</h3>
            <p className="home__text">
              Oblicz jaką ilość substancji i&nbsp;rozpuszczalnika należy
              połączyć aby otrzymać roztwór o&nbsp;określonym stężeniu.
            </p>
          </section>
        </Link>
        <Link to="/dose" className="home__link">
          <i className="fas fa-vial"></i>
          <section className="home__content">
            <h3 className="home__subtitle">Dawki leku</h3>
            <p className="home__text">
              Oblicz jaką ilość leku i&nbsp;rozpuszczalnika należy połączyć aby
              otrzymać dawkę odpowiednią dla określonego celu.
            </p>
          </section>
        </Link>
      </section>
      <footer className="footer">
        <p className="footer__text">
          Created by{" "}
          <a
            href="https://martazaorska.github.io/portfolio/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Marta Zaorska
          </a>
        </p>
        <p className="footer__text">
          &copy; Concentration Calculator App {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}

export default Home;
