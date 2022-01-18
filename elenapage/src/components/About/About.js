import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/elena.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function About() {
  return (
    <section>
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={6} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hola!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              Soy
              <strong className="main-name"> Elena Rossi</strong>
            </h1>

            <p className="heading-description blockquote">
            𝙰𝚌𝚝𝚛𝚒𝚣 𝚢 𝚌𝚊𝚗𝚝𝚊𝚗𝚝𝚎 𝚚𝚞𝚎 𝚎𝚜𝚌𝚛𝚒𝚋𝚎 𝚌𝚘𝚜𝚊𝚜🌻
🎭🎬: @estudio_juan_codina @centraldecine
🐣SVQ • GRD • LDN • MAD🏠
🐶🐱 ♍️ ✈️🌎🌈♀
            </p>

            <div className="heading-type">
              <TypeWriter />
            </div>
          </Col>

          <Col md={5}>
            <img src={myImg} className="profile-pic" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Mis redes sociales</h1>
            <p>
              {" "}
              Si desea contactar conmigo o hablar para una colaboración de un proyecto
              sientase libre de contactar conmigo.
              <br />
              <strong>sientase libre de contactar conmigo.</strong>
            </p>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </Container>
  </section>
);
  
}

export default About;
