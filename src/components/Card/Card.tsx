import React from "react";
import * as C from "./styledComponents/index";
import unoBasico1 from "./assets/uno-basico-1.0.png";
import { Button } from "@material-ui/core";


function Card() {
  return (
    <C.Container>
      <C.Content>
        <C.TopCard>
          <p>
            Grupo (A, B, C etc) - Tipo (Básico, Economico - Economico Premium -
            Luxo) - Automatico/Manual
          </p>
          <img src={unoBasico1} alt="Task Icon" />
          <h3> Nome do modelo = Fiat Uno 1.0</h3>
        </C.TopCard>
        <C.BottomCard>
          <h3>Descrição</h3>
          <p className="msg">Sua reserva garante um dos carros desse grupo.</p>
          <p className="msg">Modelo sujeito à disponibilidade da agência.</p>
          <Button variant="outlined" color="primary"> Mais detalhes
          </Button>
              <div id="maisDetalhes">
                <p>4 Portas</p>
                <p>4 Portas</p>
                <p>4 Portas</p>
                <p>4 Portas</p>
                <p>4 Portas</p>
              </div>
        </C.BottomCard>
      </C.Content>
    </C.Container>
  );
}

export default Card;