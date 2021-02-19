import React from "react";
import * as C from "./styledComponents/index";
import unoBasico1 from "./assets/uno-basico-1.0.png";
import { Button } from '../../shared/styledComponents/index'
import { useState } from 'react';

interface ICardProps {
  group: string;
  type: string;
  name: string;
  details: object;
}


function Card({group, type, name, details}: ICardProps) {
  const [showDetails, setShowDetails] = useState(false);
  
  const showDetailsOnClick = () => {
    if(showDetails === true)
    {
      setShowDetails(false);
    }
    else
    {
      setShowDetails(true);
    }
  };
  
  return (
    <C.Container>
      <C.Content>
        <C.TopCard>
          <p>
            Grupo {group} - Tipo {type}
          </p>
          <img src={unoBasico1} alt="Task Icon" />
          <h3> {name} </h3>
        </C.TopCard>
        <C.BottomCard>
          <h3>Descrição</h3>
          <p className="msg">Sua reserva garante um dos carros desse grupo.</p>
          <p className="msg">Modelo sujeito à disponibilidade da agência.</p>
          <Button  
          width={200}
          negativeMargin={0}
          onClick={showDetailsOnClick}> Mais detalhes
          </Button>
              {showDetails && 
              <div id="maisDetalhes">
                TESTE
              </div>
              }
        </C.BottomCard>
      </C.Content>
    </C.Container>
  );
}

export default Card;