import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import "./Jumbo.css";

const Jumbotron = () => {
  return (
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <p>
          "Estoy viendo la tierra. Veo los colores del paisaje, bosques, ríos,
          nubes. Todo es tan bello"
        </p>
        <h3>Yuri Gagarin</h3>
        <small>12 de Abril 1961</small>
      </Container>
    </Jumbo>
  );
};

export default Jumbotron;
