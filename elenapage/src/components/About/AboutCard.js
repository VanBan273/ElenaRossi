import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Elena Rossi </span>
            soy de <span className="purple"> Sevilla</span>
            <br />
            pero actualmente vivo en <span className="purple"> Madrid</span>
            <br />
            Estudio en la escuela Juan Codina y en la central de cine
            <br />
            Tambien canto y de vez en cuando escribo cosas.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Actriz
            </li>
            <li className="about-activity">
              <ImPointRight /> Cantante
            </li>
            <li className="about-activity">
              <ImPointRight /> Guionista
            </li>
            <li className="about-activity">
              <ImPointRight /> Directora
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
