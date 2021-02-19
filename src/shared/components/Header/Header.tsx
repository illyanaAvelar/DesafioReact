import React from 'react';
import * as H from './styledComponents/index';
import logo from "../../assets/images/whiteLogo.png";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import Home from '@material-ui/icons/Home';

function Header() {
  return (
    <H.Container>
      <H.LadoEsquerdo>
        <div id="ladoEsquerdo">
          <img src={logo} alt="Logo"/>
        </div>
      </H.LadoEsquerdo>
      <H.LadoDireito>      
          <div id="perfil">
              <Home fontSize='large' style={{ color:'white', marginRight: 10 }}/>  
            <a href="/main">Home</a>
          </div>
          <div id="minhasReservas">
              <DirectionsCarIcon fontSize='large' style={{ color:'white', marginRight: 10, marginLeft: 10 }}/>
            <a href="bookings">Minhas Reservas</a>
          </div>      
          <div id="perfil">
              <PersonRoundedIcon fontSize='large' style={{ color:'white', marginRight: 10 }}/>  
            <a href="/login">Entrar</a>
          </div>
        </H.LadoDireito>
    </H.Container>
  );
}

export default Header;