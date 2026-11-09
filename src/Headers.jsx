import React from "react";

function Header() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">LE NUMÉRIQUE, EN TOUTE SIMPLICITÉ</p>
        <h1>Les bonnes idées deviennent de <span>beaux projets.</span></h1>
        <p className="hero-description">
          Découvrez une sélection de services numériques pour concevoir,
          développer et faire évoluer vos solutions.
        </p>
        <a className="hero-button" href="#services">
          Découvrir les services <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="hero-decoration" aria-hidden="true">
        <div className="decoration-card decoration-card-one">{"</>"}</div>
        <div className="decoration-card decoration-card-two">✦</div>
        <div className="decoration-orbit" />
      </div>
    </section>
  );
}

export default Header;
